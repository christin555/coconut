const knex = require("../knex/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {secretKey} = require('../config');
const {getUser} = require('../service');

exports.register = async (req, res) => {
    const {
        firstName,
        secondName,
        lastName,
        email,
        password,
        countryId,
        about,
        photoPath
    } = req.body;

    if (!password || !email || !firstName || !secondName || !lastName) {
        return res.status(200).json({
            message: "tupica!"
        });
    }
    
    const user = {
        firstName,
        secondName,
        lastName,
        email,
        countryId,
        about,
        photoPath
    };
    const hashedPassword = await hashPassword(password);

    const result = await knex("users").insert({
        ...user,
        password: hashedPassword,
        isAdmin: false
    }).returning('id')
        .then(async ([data]) =>{
            const user = await getUser({params: {id: data}, knex});

            user.token = jwt.sign({id: data}, secretKey, {expiresIn: '24h'});

            res.status(200).json({
                message: "success! created account for new user",
                user
            });
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json({
                message: error.code === "23505" ? "Email is exist!" : "Error!"
            });
        });
};

exports.login = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    if (!password || !email) {
        return res.status(400);
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
        const response = await getUser({params: {id: user.id}, knex});
        response.token = jwt.sign({id: user.id}, secretKey, {expiresIn: '24h'});
        res.status(200).json(response);
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

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authToken'];
    if(typeof bearerHeader !=='undefined'){

    } else {
        res.sendStatus(403);
    }
};
