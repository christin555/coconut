const {getCurrentUser} = require("../users/getCurrentUser");

module.exports = {
    getEvent: async({params, knex}) => {
        const {id} = params;
        return knex('events')
            .first('*')
            .first((db)=>{
                db.count('eventId')
                    .from('eventsParticipants')
                    .whereRaw('"eventsParticipants"."eventId" = "events"."id"')
                    .groupBy('events.id');
            })
            .where('id', id);
    }
};

