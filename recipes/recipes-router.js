const express = require('express');

// const Recipes = require('./recipes-model');

const router = express.Router();

// router.get('/', (req, res) => {
//   Recipes.find()
//   .then(recipes => {
//     res.json({message: 'You got to the recipes server yay'})
//   })
//   .catch(error => {
//     res.status(500).json({message: 'Failed to get recipes ' + error.message})
//   })
// })

module.exports = router;