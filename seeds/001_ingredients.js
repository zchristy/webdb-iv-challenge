
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          name: 'Pepperoni'
        },
        {
          name: 'Cheese'
        },
        {
          name: 'Tomato Sauce'
        },
        {
          name: 'Pineapple'
        },
        {
          name: 'Pizza Dough'
        },
        {
          name: 'Taco Shells'
        },
        {
          name: 'Ground Beef'
        },
        {
          name: 'Chicken'
        },
        {
          name: 'Taco seasoning'
        },
        {
          name: 'Cilantro'
        },
        {
          name: 'Lime'
        },
        {
          name: 'Ground Cummin'
        },
        {
          name: 'Lemon'
        },
        {
          name: 'Salsa'
        },
        {
          name: 'Salmon'
        },
        {
          name: 'Salt'
        },
        {
          name: 'Pepper'
        },
        {
          name: 'Johnnys Seasoning'
        },
        {
          name: 'Cedar Plank'
        }
      ]);
    });
};
