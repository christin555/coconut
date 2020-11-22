const {getCurrentUser} = require("../users/getCurrentUser");

module.exports = {
    createEvent: async({params, knex}) => {
        const response = {};
        const {
            C_1Date,
            C1Date,
            finishDate,
            name,
            photoPath,
            startDate
        } = params.body;
        const {isAdmin} = await getCurrentUser({params, knex});

        if(isAdmin){
            await knex("events")
                .insert({
                    C_1Date,
                    C1Date,
                    finishDate,
                    name,
                    photoPath,
                    startDate
                })
                .catch(error => {
                    console.log(error);
                    response.status = 500;
                    response.message = error;
                })
                .then(()=> {
                    response.status = 200;
                    response.message = 'succes';
                }
                );

        } else {
            response.status = 401;
            response.message = 'Access denied';
        }

        return response;
    }
};
