const jwt = require("jsonwebtoken");
const {secretKey} = require('../config');

exports.verifyToken = async(req, res, next) => {
    const bearerHeader = req.headers['authtoken'];
    if(typeof bearerHeader !=='undefined'){
        const token = bearerHeader.split(' ');


        jwt.verify(token[2], secretKey,(err, authId)=>
        {
            if (err) {
                res.sendStatus(400);
            }
            else next();
        });

    } else {
        res.sendStatus(403);
    }
};
