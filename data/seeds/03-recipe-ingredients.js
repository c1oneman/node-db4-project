exports.seed = function(knex) {

    return knex('recipe_ingredients').insert([
      { recipe_id: 1, ingredient_id: 1, quantity: 1, unit: "cup" },
      { recipe_id: 2, ingredient_id: 1, quantity: 1, unit: "gallon" },
      { recipe_id: 2, ingredient_id: 2, quantity: 2, unit: "pound" },
      { recipe_id: 3, ingredient_id: 1, quantity: 1, unit: "liter" },
      { recipe_id: 3, ingredient_id: 3, quantity: 5, unit: "ounce" },
    ]);
  
  };