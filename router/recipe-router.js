const express = require('express');

const db = require('../data/data-model.js')

// const mw = require('../middleware/middleware.js')

const router = express.Router();

router.post('/', (req, res) => {
  db.addRecipe(req.body)
  .then(id => {
    res.status(200).json(id)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.get('/', (req, res) => {
  db.getRicpes()
  .then(recipes => {
    res.status(200).json(recipes)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.get('/:id', (req, res) => {

  db.getRecipe(req.params.id)
  .then(recipe => {

    db.getIngredientsByRecipe(req.params.id)
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

router.put('/:id', (req, res) => {
  db.updateRecipe(req.params.id, req.body)
  .then(recipe => {
    res.status(200).json(recipe)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.delete('/:id', (req, res) => {
  db.removeRecipe(req.params.id)
  .then(recipe => {
    res.status(200).json({message: "Recipe succesfully Deleted"})
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

module.exports = router
