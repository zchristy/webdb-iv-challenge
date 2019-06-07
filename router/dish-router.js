const express = require('express');

const db = require('../data/data-model.js')

// const mw = require('../middleware/middleware.js')

const router = express.Router();

router.post('/', (req, res) => {
  db.addDish(req.body)
  .then(id => {
    res.status(200).json(id)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.get('/', (req, res) => {
  db.getDishes()
  .then(dishes => {
    res.status(200).json(dishes)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.get('/:id', (req, res) => {

  db.getDish(req.params.id)
  .then(dish => {

    db.getRecipesByDish(req.params.id)
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

router.put('/:id', (req, res) => {
  db.updateDish(req.params.id, req.body)
  .then(dish => {
    res.status(200).json(dish)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.delete('/:id', (req, res) => {
  db.removeDish(req.params.id)
  .then(dish => {
    res.status(200).json({message: "Dish succesfully Deleted"})
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

module.exports = router
