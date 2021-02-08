
exports.up = function(knex) {
  return knex.schema.createTable('recipes', table => {
    table.increments()
    table.string('recipe_name', 128)
  })
    .createTable('ingredients', table => {
      table.increments()
      table.string('ingredient_name', 128)
        .notNullable()
      table.integer('measurement')
        .unsigned()
        .notNullable()
    })
    .createTable('combo', table => {
      table.increments()
      table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
      table.integer('ingredient_quantity')
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes ')
    })
    .createTable('instructions', table => {
      table.increments()
      table.integer('step_number')
        .unsigned()
        .notNullable()
      table.string('instructions', 128)
        .notNullable()
      table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes ')
      })
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
  
};
