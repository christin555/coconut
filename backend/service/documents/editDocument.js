const {hashPassword, verifyPassword} = require("../../auth");

module.exports = {
    editDocument: async({params, knex}) => {
        const {body} = params;
        delete body.role;
        return knex('documents')
            .update(body)
            .where('documents.id', body.id);
    }
};
