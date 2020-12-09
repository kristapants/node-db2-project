
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        //id: primary key, unique, not null, integers that auto increment
        table.increments();
        //required fields
        table.text('VIN', 128).unique().notNullable();
        table.text('Make').notNullable();
        table.text('Model').notNullable();
        table.integer('Mileage').notNullable();
        //optional fields
        table.text('Transmission_Type');
        table.text('Title_State');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
