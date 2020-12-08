const {getCurrentUser} = require("../users/getCurrentUser");

module.exports = {
    createDocument: async({params, knex}) => {

        const {body} = params;
        const {isAdmin} = await getCurrentUser({params, knex});
        if (isAdmin) {
            await knex("documents")
                .insert(body);
            return {message: 'Success'};
        }
        return {message: 'Access denied'};
    }
};
