const express = require('express');

const Recipes = require('./recipes-model');

const router = express.Router();

// GET requests
router.get('/', (req, res) => {
  Recipes.find()
  .then(recipes => {
    res.json(recipes)
  })
  .catch(error => {
    res.status(500).json({message: 'Failed to get recipes ' + error.message})
  })
})

router.get('/:id',  (req, res) => {
  const { id } = req.params;

  Recipes.findById(id)
  .then(recipe => {
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipe '  + err.message});
  });
});

router.get('/:id/shoppingList', (req, res) => {
  const { id } = req.params.id;

  Recipes.findShoppingList(id)
  .then(list => {
    {res.json(list)}
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get shopping list ' + err.message });
  });
});





module.exports = router;