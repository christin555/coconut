exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id')
        table.string('name')
        table.string('about_user')
        table.string('email')
        table.integer('gender')
        table.timestamp('last_activity')
        table.string('password')
        table.bigInteger('phone')
        table.string('photo_path')
        table.string('web_site', 50)
        table.timestamp('deleted_at')
        table.timestamps()
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('users2')
};
