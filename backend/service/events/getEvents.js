const {getCurrentUser} = require("../users/getCurrentUser");

module.exports = {
    getEvents: async({params, knex}) => {

        const {isAdmin} = await getCurrentUser({params, knex});
        return knex("events")
            .select(knex.raw(`id, name, "startDate", "finishDate", (SELECT count(id) FROM "eventsParticipants"  
            WHERE "eventsParticipants"."eventId" = events.id) 
            AS "countMembers"`))
            .groupBy('id')
            .catch(error => {
                console.log(error);
                return {
                    status:500,
                    message: error
                };
            });
    }
};
