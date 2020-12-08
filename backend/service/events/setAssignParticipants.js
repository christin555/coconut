const {getCurrentUser} = require("../users/getCurrentUser");

module.exports = {
    setAssignParticipants: async({params, knex}) => {
        const {id, isAssigned} = params.body;
        const {isAdmin} = await getCurrentUser({params, knex});

        if (isAdmin)
        {
            await knex("eventsParticipants")
                .update('isAssigned', isAssigned)
                .where('id', id);
            return {message: 'success!'};
        }
        return {message: 'Access denied!'};
    }
};

