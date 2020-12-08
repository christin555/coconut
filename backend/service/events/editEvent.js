const {hashPassword, verifyPassword} = require("../../auth");

module.exports = {
    editEvent: async({params, knex}) => {
        const {body} = params;
        delete body.count;
        return knex('events')
            .update(body)
            .where('events.id', body.id);
    }
};
