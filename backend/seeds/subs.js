var faker = require('faker');

let createRecord = (knex, id) => {
    return knex('subscriptions').insert({
        id,
        subscriber_id: faker.random.number({
            'min': 1,
            'max': 100
        }),
        subscription_id: faker.random.number({
            'min': 1,
            'max': 100
        }),
    })
}


let mycreateRecord = (knex, id) => {
    return knex('subscriptions').insert({
        id,
        subscriber_id: 1,
        subscription_id: faker.random.number({
            'min': 1,
            'max': 100
        }),
    })
}

let mySubscreateRecord = (knex, id) => {
    return knex('subscriptions').insert({
        id,
        subscription_id: 1,
        subscriber_id: faker.random.number({
            'min': 1,
            'max': 100
        }),
    })
}


exports.seed = function (knex) {
    return knex('subscriptions').del()
        .then(() => {
            let records = [];

            for (let i = 1; i < 100; i++) {
                records.push(createRecord(knex, i))
            }
            ;

            for (let i = 100; i < 150; i++) {
                records.push(mycreateRecord(knex, i))
            }
            ;

            for (let i = 150; i < 225; i++) {
                records.push(mySubscreateRecord(knex, i))
            }
            ;

            return Promise.all(records);
        });
};
