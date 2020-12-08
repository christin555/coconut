'use strict';

const {getUser} = require('./users/getUser');
const {getCurrentUser} = require('./users/getCurrentUser');
const {editUser} = require('./users/editUser');
const {createEvent} = require('./events/createEvent');
const {getEvents} = require('./events/getEvents');
const {getEvent} = require('./events/getEvent');
const {editEvent} = require('./events/editEvent');
const {getParticipants}= require('./events/getParticipants');
const {setAssignParticipants}= require('./events/setAssignParticipants');
const {getDocuments} = require('./documents/getDocuments');
const {getDocument} = require('./documents/getDocument');
const {editDocument} = require('./documents/editDocument');
const {createDocument} = require('./documents/createDocument');

module.exports = {
    getUser,
    getCurrentUser,
    editUser,
    createEvent,
    getEvents,
    getEvent,
    editEvent,
    getParticipants,
    setAssignParticipants,
    getDocuments,
    getDocument,
    editDocument,
    createDocument
};
