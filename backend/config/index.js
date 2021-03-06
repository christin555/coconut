'use strict';

module.exports = {
    secretKey: "coconutSecretKey2020",
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            database: 'coconut',
            user: 'postgres',
            port: '5433'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: './migrations',
            tableName: 'knex_migrations'
        },
        useNullAsDefault: true
    },

    production: {
        client: 'pg',
        connection: {
            database: 'coconut',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: './migrations',
            tableName: 'knex_migrations'
        },
        useNullAsDefault: true
    }
};
