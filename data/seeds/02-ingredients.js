
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'chocolate', measurement: "grams" },
        {ingredient_name: 'butter', measurement: "grams" },
        {ingredient_name: 'self-raising flour', measurement: "grams" },
        {ingredient_name: 'dirt', measurement: "grams" },
        {ingredient_name: 'water', measurement: "ml" },
        {ingredient_name: 'bread', measurement: "slices" },
        {ingredient_name: 'jam', measurement: "grams" },
        {ingredient_name: 'gin', measurement: "ml" },
        {ingredient_name: 'tonic', measurement: "ml" },
      
      ]);
    });
};
