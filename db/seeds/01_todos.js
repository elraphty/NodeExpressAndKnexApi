
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, title: 'raph One', user_id: 1},
        {id: 2, title: 'raph Two', user_id: 1},
        {id: 3, title: 'raph Three', user_id: 1}
      ]);
    });
};
