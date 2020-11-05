exports.seed = function(knex) {

    return knex('recipes').insert([
      { recipe_name: 'cup of water' },
      { recipe_name: 'bowl of soup' },
      { recipe_name: 'bowl of pasta' },
    ]);
  
  };