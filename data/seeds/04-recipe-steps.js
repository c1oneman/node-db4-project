exports.seed = function(knex) {

    return knex('recipe_steps').insert([
      { recipe_id: 1, step: 1, instructions: "pour water into cup" },
      { recipe_id: 2, step: 1, instructions: "pour water into pot" },
      { recipe_id: 2, step: 2, instructions: "add rice" },
      { recipe_id: 2, step: 3, instructions: "cook rice" },
      { recipe_id: 3, step: 1, instructions: "pour water into pot" },
      { recipe_id: 3, step: 2, instructions: "add noodles" },
      { recipe_id: 3, step: 3, instructions: "cook pasta" },
    ]);
  
  };