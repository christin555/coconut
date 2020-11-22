'use strict';

const {getUser} = require('./users/getUser');
const {getCurrentUser} = require('./users/getCurrentUser');
const {editUser}= require('./users/editUser');
const {createEvent}= require('./events/createEvent');

module.exports = {
    getUser,
    getCurrentUser,
    editUser,
    createEvent
};
