"use strict";

exports.up = async (knex) => {
    await knex.schema.createTable("users", table => {
        table.increments("id")
            .primary();
        table.string("firstName")
            .notNullable();
        table.string("secondName")
            .notNullable();
        table.string("lastName")
            .notNullable();
        table.string("about");
        table.string("country");
        table.string("email")
            .notNullable()
            .unique();
        table.boolean("isAdmin")
            .notNullable();
        table.string("password")
            .notNullable();
        table.string("photoPath");
        table.timestamp("deleted_at");
        table.timestamps();
    });
    await knex.schema.createTable("events", table => {
        table.increments("id")
            .primary();
        table.string("name")
            .notNullable();
        table.date("startDate")
            .notNullable();
        table.date("finishDate")
            .notNullable();
        table.date("C1Date");
        table.date("C_1Date");
        table.string("photoPath");
        table.timestamp("deleted_at");
        table.timestamps();
    });
    await knex.schema.createTable("eventsParticipants", table => {
        table
            .increments("id")
            .primary();
        table.integer("userId")
            .comment("Идентификатор пользователя");
        table.integer("eventId")
            .comment("Идентификатор роли");
        table.integer("roleId")
            .comment("Идентификатор роли");
        table.boolean("isAssigned")
            .comment("Роль потверждена администратором");
        table.index("userId");
        table.index(["eventId", "userId"]);
    });
    await knex.schema.createTable("documents", table => {
        table.increments("id")
            .primary();
        table.string("name")
            .notNullable();
        table.string("content")
            .notNullable();
        table.integer("eventId")
            .notNullable();
        table.string("day")
            .notNullable();
        table
            .integer("roleId")
            .notNullable()
            .comment("Для кого");
    });
    await knex.schema.createTable("documentsSigned", table => {
        table.integer("documentId")
            .notNullable();
        table
            .integer("userId")
            .notNullable()
            .comment("Индентификатор пользователя, подписавшего документ");
        table.primary(["userId", "documentId"]);
        table.index("documentId");
    });
    await knex.schema.createTable("roles", table => {
        table.increments("id")
            .primary();
        table.string("name");
    });

    await knex('roles')
        .insert([{name:'Experts'}, {name: 'Participants'}]);
};

exports.down = function (knex) {
    return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('events'),
        knex.schema.dropTable('eventsParticipants'),
        knex.schema.dropTable('documents'),
        knex.schema.dropTable('documentsSigned'),
        knex.schema.dropTable('roles')
    ]);
};
