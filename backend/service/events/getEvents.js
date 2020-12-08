const {getCurrentUser} = require("../users/getCurrentUser");

module.exports = {
    getEvents: async({params, knex}) => {
        const user = await getCurrentUser({params, knex});
        if (user.isAdmin) {
            return knex("events")
                .select(knex.raw(`id, name, "startDate", "finishDate", (SELECT count("eventId") FROM "eventsParticipants"  
            WHERE "eventsParticipants"."eventId" = events.id group by "events"."id") 
            AS "countMembers"`))
                .groupBy('id');

        } else return knex("events")
            .select(knex.raw(`events.id, events.name, "startDate", "roles"."name" as "myRole", "finishDate",  
            (SELECT count("eventId") FROM "eventsParticipants"  
            WHERE "eventsParticipants"."eventId" = events.id group by "events"."id") 
            AS "countMembers"`))
            .innerJoin(knex.raw(`"eventsParticipants" on "eventsParticipants"."userId" = ${user.id} and "eventId" = "events"."id"`))
            .innerJoin('roles', 'roles.id', 'eventsParticipants.roleId')
            .groupBy(['events.id', 'roles.name']);
    }

};
