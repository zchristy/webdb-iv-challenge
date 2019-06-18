const express = require('express');

const db = require('../data/data-model.js')

const mw = require('../middleware/middleware.js')

const router = express.Router();

router.post('/', mw.validateDish, (req, res) => {
  db.addDish(req.dish)
  .then(id => {
    res.status(200).json(id)
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});

router.get('/', (req, res) => {
  db.getDishes()
  .then(dishes => {
    res.status(200).json(dishes)
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});

router.get('/:id', mw.validateDishId, (req, res) => {

  db.getDish(req.dishId)
  .then(dish => {

    db.getRecipesByDish(req.dishId)
    .then(recipes => {

      const dishObj = dish
      dishObj.recipes = recipes
      res.status(200).json(dish)

    })

    .catch(err => {
      res.status(500).json(err.message)
    })
  })

  .catch(err => {
    res.status(500).json(err.message)
  })
});

router.put('/:id', mw.validateDishId, mw.validateDish, (req, res) => {
  db.updateDish(req.dishId, req.dish)
  .then(dish => {
    res.status(200).json(dish)
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});

router.delete('/:id', mw.validateDishId, (req, res) => {
  db.removeDish(req.dishId)
  .then(dish => {
    res.status(200).json({message: "Dish succesfully Deleted"})
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});

module.exports = router
