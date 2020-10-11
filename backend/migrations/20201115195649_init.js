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
        table.integer("countryId");
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
        table.date("C+1Date");
        table.string("photoPath");
        table.timestamp("deleted_at");
        table.timestamps();
    });
    await knex.schema.createTable("eventsParticipants", table => {
        table.integer("userId")
            .comment("Идентификатор пользователя");
        table.integer("roleId")
            .comment("Идентификатор роли");
        table.integer("isAssigned")
            .comment("Роль потверждена администратором");
        table.primary(["userId", "roleId"]);
        table.index("userId");
    });
    await knex.schema.createTable("documents", table => {
        table.increments("id")
            .primary();
        table.integer("name")
            .notNullable();
        table.integer("content")
            .notNullable();
        table.integer("eventId")
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
    await knex.schema.createTable("countries", table => {
        table.increments("id")
            .primary();
        table.string("name");
    });
};

exports.down = function (knex) {
    return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('events'),
        knex.schema.dropTable('eventsParticipants'),
        knex.schema.dropTable('documents'),
        knex.schema.dropTable('documentsSigned'),
        knex.schema.dropTable('roles'),
        knex.schema.dropTable('countries'),
    ]);
};
