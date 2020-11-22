module.exports = {
    getUser: ({params, knex}) => {
        const {id} = params;
        return knex("users")
            .first([
                'users.id',
                'firstName',
                'lastName',
                'secondName',
                'email',
                'about',
                'country',
                'photoPath',
                'isAdmin'
            ])
            .where('users.id', id);

    }
};
