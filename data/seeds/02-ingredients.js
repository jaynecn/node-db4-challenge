
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'grams of chocolate', quantity: "200" },
        {ingredient_name: 'grams of butter', quantity: "200" },
        {ingredient_name: 'grams of self-raising flour', quantity: "200" },
        {ingredient_name: 'grams of dirt', quantity: "500" },
        {ingredient_name: 'ml of water', quantity: "800" },
        {ingredient_name: 'slices of bread', quantity: "2" },
        {ingredient_name: 'grams of jam', quantity: "10" },
        {ingredient_name: 'ml of gin', quantity: "50" },
        {ingredient_name: 'ml of tonic', quantity: "50" },
      
      ]);
    });
};
