const {getCurrentUser} = require("../users/getCurrentUser");

module.exports = {
    getDocument: async({params, knex}) => {
        const {id} = params;

        return knex('documents')
            .first(['roles.name as role','documents.name','day','documents.id', 'content'])
            .where('documents.id', id)
            .leftJoin('roles', 'roles.id', 'documents.roleId');
    }
};

