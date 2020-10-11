var faker = require('faker');

let myRecord = (knex, id) => {
    return knex('users').insert({
        id: 1,
        name: "tina",
        email: "kriska_555@mail.ru",
        photo_path: "https://sun3-10.userapi.com/c836539/v836539989/768bb/tvNE7qozA0g.jpg",
        about_user: "C H R I S T I N A",
        web_site: "https://vk.com/phoenix_ti"
    })
}

let createRecord = (knex, id) => {
    return knex('users').insert({
        id,
        name: faker.internet.userName(),
        email: faker.internet.exampleEmail(),
        photo_path: faker.internet.avatar(),
        about_user: faker.lorem.sentence(),
        web_site: faker.internet.exampleEmail()

    })
}


exports.seed = function (knex) {
    return knex('users').del()
        .then(() => {

            let records = [];

            records.push(myRecord(knex));

            for (let i = 2; i < 100; i++) {
                records.push(createRecord(knex, i))
            }
            ;

            return Promise.all(records);
        });
};
