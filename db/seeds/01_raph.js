
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('raph').del()
    .then(function () {
      // Inserts seed entries
      return knex('raph').insert([
        {id: 1, name: 'rowValue1', email: 'elraphtyofficial@gmail.com'},
        {id: 2, name: 'rowValue2', email: 'elraphtyofficial@gmail1.com'},
        {id: 3, name: 'rowValue3', email: 'elraphtyofficial2@gmail.com'}
      ]);
    });
};
