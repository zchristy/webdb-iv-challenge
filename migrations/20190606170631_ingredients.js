// new changes to the database schema
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl => {
    //primarykey called id, autoincrements, integer
    tbl.increments()

    // a varchar called name, 128, unique, not null
    tbl.string('name', 128).notNullable().unique()

  })
};

// how to undo the changes to the schema
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients')
};
