const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findShoppingList
}

function find() {
  return db('recipes')
}

function findById(id) {
  return db('recipes as r')
    .where({ 'r.id': id });
}

function findShoppingList(id) {
  return db('recipes as r')
    .join('combo as c', 'c.recipe_id', 'r.id')
    .select('c.ingredient_id', 'c.ingredient_quantity')
    .where({ 'r.id': id });
}