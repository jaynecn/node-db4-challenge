
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'chocolate brownies'},
        {recipe_name: 'mud pie'},
        {recipe_name: 'scottish piece and jam'},
        {recipe_name: 'gin and tonic'},
        {recipe_name: 'bread and gin'}

      ]);
    });
};
