
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', tbl => {
    //primarykey called id, autoincrements, integer
    tbl.increments()

    // a varchar called name, 128, unique, not null
    tbl.string('name', 128).notNullable().unique()

    tbl.string('instructions', 500).notNullable()

    tbl.integer('dish_id').unsigned().notNullable()
    tbl.foreign('dish_id').references('dish.id').onDelete('RESTRICT').onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe')
};
