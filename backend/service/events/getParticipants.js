const {getCurrentUser} = require("../users/getCurrentUser");

module.exports = {
    getParticipants: async({params, knex}) => {
        const {isAdmin} = await getCurrentUser({params, knex});

        if (isAdmin)
        {
            return knex("eventsParticipants").select([
                'eventsParticipants.id',
                'events.name as eventName',
                'users.firstName',
                'roles.name as role',
                'isAssigned'
            ])
                .join('events', 'events.id', 'eventsParticipants.eventId')
                .join('roles', 'roles.id', 'eventsParticipants.roleId')
                .join('users', 'users.id', 'eventsParticipants.userId');
        }
        return {message: 'Access denied!'};

    }
};
