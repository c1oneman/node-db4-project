// scheme-model
const db = require('./data/db-config.js');
module.exports = {
    find() {
        return db("recipes")
    },
    findById(id) {
        return db("recipes").where({ id }).first()
    },
    findSteps(id) {
        return db('recipes as rc')
            .join('recipe_steps as st', 'rc.id', 'st.recipe_id')
            .select('st.step', 'st.instructions')
            .where({ 'st.recipe_id': id })
            .orderBy('st.step')
    },
    getShoppingList(id) {
        return db("recipe_ingredients")
        .join("ingredients", "recipe_ingredients.ingredient_id", "=", "ingredients.id")
        .select("ingredient_name", "quantity", "unit")
        .where({ 'recipe_ingredients.recipe_id': id })
        .orderBy("ingredient_name");
    }
}
