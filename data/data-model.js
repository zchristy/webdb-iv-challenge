const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  getDish,
  getRecipesByDish,
  addDish,
  updateDish,
  removeDish,
  getRecipes,
  getRecipe,
  getIngredientsByRecipe,
  addRecipe,
  updateRecipe,
  removeRecipe
};

function getDishes() {
  return db('dish')
}

function getDish(id) {
  return db('dish')
  .where({ id })
  .first()
}

function getRecipesByDish(id) {
  return db('recipe')
  .where({ dish_id: id });
}

function addDish(dish) {
  return db('dish')
  .insert(dish, 'id')
}

function updateDish(id, changes) {
  return db('dish')
  .where({ id })
  .update(changes, '*');
}

function removeDish(id) {
  return db('dish')
  .where({ id })
  .del();
}

function getRecipes() {
  return db('recipes')
}

function getRecipe(id) {
  return db('recipe')
  .where({ id })
  .first();
}

function getIngredientsByRecipe(id) {
  return db('recipe_ingredients')
  .join('ingredients', 'recipe_ingredients.ingredients_id', 'ingredients.id')
  .select('ingredients.id', 'ingredients.name as ingredient', 'recipe_ingredients.quantity')
  .where({ recipe_id: id });
}

function addRecipe(cohort) {
  return db('recipes')
  .insert(cohort, 'id')
}

function updateRecipe(id, changes) {
  return db('recipes')
  .where({ id })
  .update(changes, '*');
}

function removeRecipe(id) {
  return db('recipes')
  .where({ id })
  .del();
}
