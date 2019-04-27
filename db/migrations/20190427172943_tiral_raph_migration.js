
exports.up = function(knex, Promise) {
//   return knex.schema.createTable('raph', function(table) {
//     table.increments();
//     table.string('name').notNullable();
//     table.string('first');
//     table.string('email').notNullable();
//     table.timestamp('created_at').defaultsTo(knex.fn.now());
//     table.timestamp('updated_at').defaultsTo(knex.fn.now());
//   })
//   .createTable('todos', function(table) {
//     table.increments();
//     table.string('title').notNullable();
//     table.boolean('completed').notNullable().defaultsTo(false);
//     table.timestamp('created_at').defaultsTo(knex.fn.now());
//     table.timestamp('updated_at').defaultsTo(knex.fn.now());
//     table.integer('user_id').references('id').inTable('raph');
//   });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('raph');
};
