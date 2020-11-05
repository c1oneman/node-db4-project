exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments()
            tbl.string('recipe_name', 128).notNullable()
        })
        .createTable('ingredients', tbl => {
            tbl.increments()
            tbl.string('ingredient_name', 128).notNullable()
        })
        .createTable("recipe_ingredients", table => {
            table.increments();
            table.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onUpdate("CASCADE")
                .onDelete("RESTRICT");
            table.integer("ingredient_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("ingredients")
                .onUpdate("CASCADE")
                .onDelete("RESTRICT");

            table.float("quantity")

            table.string("unit", 32)
        })
        .createTable("recipe_steps", table => {
            table.increments();

            table.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onUpdate("CASCADE")
                .onDelete("RESTRICT");

            table.integer("step")
                .unsigned()
                .notNullable();

            table.string("instructions")

        })
};

exports.down = function (knex, Promise) {
    // drop in the opposite order
    return knex.schema
        .dropTableIfExists('recipe_steps')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};