exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', tbl => {
    //primarykey called id, autoincrements, integer
    tbl.increments()

    // foreign key for recipe id
    tbl.integer('recipe_id').unsigned().notNullable()
    tbl.foreign('recipe_id').references('recipe.id').onDelete('RESTRICT').onUpdate('CASCADE')

    // foreign key for ingredients id
    tbl.integer('ingredients_id').unsigned().notNullable()
    tbl.foreign('ingredients_id').references('ingredients.id').onDelete('RESTRICT').onUpdate('CASCADE')

    // quantity float column
    tbl.float('quantity')
  })
};

// how to undo the changes to the schema
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients')
};
