
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_number: "1", instructions: "melt the chocolate in a bain marie", ingredient_id: "1", recipe_id: "1"},
        {step_number: "2", instructions: "melt the butter and mix with chocolate", ingredient_id: "2", recipe_id: "1"},
        {step_number: "3", instructions: "slowly mix in the flour with the butter and chocolate", ingredient_id: "3", recipe_id: "1"},
        {step_number: "1", instructions: "find some dirt, sift out any stones", ingredient_id: "4", recipe_id: "2"},
        {step_number: "2", instructions: "stir the water into the dirt", ingredient_id: "5", recipe_id: "2"},
        {step_number: "1", instructions: "find a scottish pan loaf, steal a couple of slices", ingredient_id: "6", recipe_id: "3"},
        {step_number: "2", instructions: "spead jam on your slices, magic!", ingredient_id: "7", recipe_id: "3"},
        {step_number: "1", instructions: "measure out a double of your finest gin", ingredient_id: "8", recipe_id: "4"},
        {step_number: "2", instructions: "gently stir in the tonic, maybe include ice and a slice", ingredient_id: "9", recipe_id: "4"},
        {step_number: "1", instructions: "find some lovely focaccia", ingredient_id: "6", recipe_id: "5"},
        {step_number: "2", instructions: "have some neat gin with your fancy bread", ingredient_id: "8", recipe_id: "5"},
      ]);
    });
};
