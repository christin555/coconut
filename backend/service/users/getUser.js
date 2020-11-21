module.exports = {
    getUser: ({params, knex}) => {
        const {id} = params;

        return knex("users")
            .first([
                'users.id',
                'firstName',
                'secondName',
                'email',
                'about',
                'countries.name as country',
                'photoPath as photo'
            ])
            .leftJoin('countries', 'countries.id', 'countryId')
            .where('users.id', id);


    }
};
