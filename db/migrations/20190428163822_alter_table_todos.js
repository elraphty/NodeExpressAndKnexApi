
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('todos', table => {
    table.string('trial');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('todos', table => {
    table.string('trial');
  });
};
