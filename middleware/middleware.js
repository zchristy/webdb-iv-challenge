const dataDb = require('../data/data-model.js')

module.exports = {
  validateDishId,
  validateDish,
  validateRecipeId,
  validateRecipe,
};

//custom middleware

function validateDishId(req, res, next) {
  const { id } = req.params

    dataDb.getDish(id)
    .then(dish => {
      if(dish) {
        req.dishId = dish.id
        next()
      } else {
        res.status(400).json({ message: "invalid dish id" })
      }
    })
    .catch(err => {
      res.status(500).json({error: "Internal Server Error"})
    })

};

function validateDish(req, res, next) {
  const { name } = req.body

  if(Object.keys(req.body).length) {
    if(name) {
      req.dish = {
        name: name
      }
      next()
    } else {
      res.status(400).json({ message: "missing required field" })
    }
  } else {
    res.status(400).json({ message: "missing dish data" })
  }

};

function validateRecipeId(req, res, next) {
  const { id } = req.params

    dataDb.getRecipe(id)
    .then(recipe => {
      if(recipe) {
        req.recipeId = recipe.id
        next()
      } else {
        res.status(400).json({ message: "invalid recipe id" })
      }
    })
    .catch(err => {
      res.status(500).json({error: "Internal Server Error"})
    })

};

function validateRecipe(req, res, next) {
  const { name, instructions, dish_id } = req.body

  if(Object.keys(req.body).length) {
    if(name && instructions && dish_id) {
      req.recipe = {
        name: name,
        instructions: instructions,
        dish_id: dish_id
      }
      next()
    } else {
      res.status(400).json({ message: "missing required name field or fields" })
    }
  } else {
    res.status(400).json({ message: "missing recipe data" })
  }
};
