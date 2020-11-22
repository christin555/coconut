const knex = require("../knex/index");
const {
    getUser,
    getCurrentUser,
    editUser,
    createEvent
} = require('../service');

const promiseFn = (fn, res, params) => new Promise((resolve) => fn(params).then((data)=>
{
    if (data.status)
        res.status(data.status);
    if(data.message)
        return res.json(data.message);
    return res.json(data);
}));

module.exports = {
    getUser: ({params}, res) => promiseFn(getUser,res,{params, knex}),
    getCurrentUser: (params, res) => promiseFn(getCurrentUser,res,{params, knex}),
    editUser: (params, res) => promiseFn(editUser,res,{params, knex}),

    createEvent: (params, res) => promiseFn(createEvent,res,{params, knex}),
};
