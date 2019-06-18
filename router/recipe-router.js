const express = require('express');

const db = require('../data/data-model.js')

const mw = require('../middleware/middleware.js')

const router = express.Router();

router.post('/', mw.validateRecipe, (req, res) => {
  db.addRecipe(req.recipe)
  .then(id => {
    res.status(200).json(id)
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});

router.get('/', (req, res) => {
  db.getRicpes()
  .then(recipes => {
    res.status(200).json(recipes)
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});

router.get('/:id', mw.validateRecipeId, (req, res) => {

  db.getRecipe(req.recipeId)
  .then(recipe => {

    db.getIngredientsByRecipe(req.recipeId)
    .then(ingredients => {

      const recipeObj = recipe
      recipeObj.ingredients = ingredients
      res.status(200).json(recipe)

    })

    .catch(err => {
      res.status(500).json(err.message)
    })
  })

  .catch(err => {
    res.status(500).json(err.message)
  })
});

router.put('/:id', mw.validateRecipeId, mw.validateRecipe, (req, res) => {
  db.updateRecipe(req.recipeId, req.recipe)
  .then(recipe => {
    res.status(200).json(recipe)
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});

router.delete('/:id', mw.validateRecipeId, (req, res) => {
  db.removeRecipe(req.recipeId)
  .then(recipe => {
    res.status(200).json({message: "Recipe succesfully Deleted"})
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});

module.exports = router
