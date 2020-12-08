const knex = require("../knex/index");
const {
    getUser,
    getCurrentUser,
    editUser,

    createEvent,
    getEvents,
    editEvent,
    getParticipants,
    setAssignParticipants,
    getEvent,

    getDocuments,
    getDocument,
    createDocument,
    editDocument
} = require('../service');

const promiseFn = (fn, res, params) => new Promise((resolve) => fn(params).then((data)=>
{
    if (data.status)
    {
        res.status(data.status);
    }
    if(data.message)
    {
        return res.json(data.message);
    }
    return res.json(data);
}));

module.exports = {
    getUser: ({params}, res) => promiseFn(getUser,res,{params, knex}),
    getCurrentUser: (params, res) => promiseFn(getCurrentUser,res,{params, knex}),
    editUser: (params, res) => promiseFn(editUser,res,{params, knex}),

    createEvent: (params, res) => promiseFn(createEvent,res,{params, knex}),
    getEvents: (params, res) => promiseFn(getEvents,res, {params, knex}),
    getEvent: ({params}, res) => promiseFn(getEvent,res, {params, knex}),
    editEvent: (params, res) => promiseFn(editEvent,res, {params, knex}),
    getParticipants: (params, res) => promiseFn(getParticipants,res, {params, knex}),
    setAssignParticipants: (params, res) => promiseFn(setAssignParticipants,res, {params, knex}),

    getDocuments: (params, res) => promiseFn(getDocuments,res, {params, knex}),
    getDocument: ({params}, res) => promiseFn(getDocument,res, {params, knex}),
    createDocument: (params, res) => promiseFn(createDocument,res, {params, knex}),
    editDocument: (params, res) => promiseFn(editDocument,res, {params, knex}),
};
