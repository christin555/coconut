const knex = require("../knex/index");
const bcrypt = require("bcrypt");

exports.getUser = (id, res) => {
    console.log(id);
    return knex("users").first([
        'users.id',
        'firstName',
        'secondName',
        'email',
        'about',
        'countries.name as country',
        'photoPath as photo'
    ])
        .leftJoin('countries', 'countries.id', 'countryId')
        .where('users.id', id);
};

exports.createUser = async (req, res) => {
    const {
        firstName,
        secondName,
        lastName,
        email,
        password
    } = req.body;

    if (!password || !email || !firstName || !secondName || !lastName) {
        return res.status(200).json({
            message: "tupica!"
        });
    }

    const hashedPassword = await hashPassword(password);

    const result = await knex("users").insert({
        password: hashedPassword,
        firstName,
        secondName,
        lastName,
        email,
        isAdmin: false
    })
        .then(() => res.status(200).json({
            message: "success! created account for new user",
            id: result.id
        }))
        .catch(error => res.status(500).json({
            message: error.code === "23505" ? "Email is exist!" : "Error!"
        }));
};

exports.authenticate = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    if (!password || !email) {
        return res.status(200).json({
            message: "tupica!"
        });
    }

    const user = await findOneByEmail(email)
        .then(async (result) => {
                const isVerified = await verifyPassword(password, result.password);
                return {isVerified, id: result.id};
            }
        )
        .catch((err) =>
            res.status(500).json({
                message: err
            })
        );
    if (user.isVerified) {
        const user = await this.getUser(1);
        res.status(200).json(user);
    } else
        res.status(400).json({
            message: "Auth is failed"
        });
};


const hashPassword = (password) => {
    return new Promise(function (resolve, reject) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                reject(err);
            } else {
                bcrypt.hash(password, salt, function (err, hash) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(hash);
                    }
                });
            }
        });
    });
};

const findOneByEmail = (email) => {
    return new Promise(function (resolve, reject) {
        knex("users").first(["password", "id"]).where("email", email)
            .then((result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject("no user found");
                }
            })
            .catch(err => reject(err));
    });
};

const verifyPassword = (password, hashedPassword) => {
    return new Promise(function (resolve, reject) {
        bcrypt.compare(password, hashedPassword, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

