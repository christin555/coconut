const knex = require("../knex/index");
const {getUser} = require('../service');

const promiseFn = (fn, res, params) => new Promise((resolve) => fn(params).then(data =>
    res.json(data)));

module.exports = {
    getUser: ({params}, res) => promiseFn(getUser,res,{params, knex})
};
