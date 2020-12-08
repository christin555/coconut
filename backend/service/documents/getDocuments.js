const {getCurrentUser} = require("../users/getCurrentUser");

module.exports = {
    getDocuments: async({params, knex}) => {
        const {eventId} = params.query;
        const user = await getCurrentUser({params, knex});
        if (user.isAdmin) {
            return knex('documents')
                .select(['roles.name as role', 'documents.name', 'day', 'documents.id'])
                .where('eventId', eventId)
                .leftJoin('roles', 'roles.id', 'documents.roleId');
        }
        else return knex('documents')
            .select(['roles.name as role', 'documents.name', 'day', 'documents.id'])
            .innerJoin(knex.raw(`"eventsParticipants" on "eventsParticipants"."userId" = ${user.id} and "eventsParticipants"."eventId" = "documents"."eventId"`))
            .where('documents.eventId', eventId)
            .whereRaw('"documents"."roleId" = "eventsParticipants"."roleId"')
            .join('roles', 'roles.id', 'documents.roleId');
    }
};

