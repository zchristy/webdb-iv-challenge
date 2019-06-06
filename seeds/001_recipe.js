
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {
          name: 'Pizza Recipe',
          instructions: 'Some instructions',
          dish_id: 1
        },
        {
          name: 'Taco Recipe',
          instructions: 'Some instructions',
          dish_id: 2
        },
        {
          name: 'Baked Salmon Recipe',
          instructions: 'Some instructions',
          dish_id: 3
        }
      ]);
    });
};
