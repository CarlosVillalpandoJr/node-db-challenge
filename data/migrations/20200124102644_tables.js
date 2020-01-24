
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments()

            tbl.string('name', 128)
                .unique()
                .notNullable()

            tbl.string('description', 255)
                
            tbl.boolean('completed')
                .defaultTo(0)
                .notNullable()
        })

        .createTable('resources', tbl => {
            tbl.increments()

            tbl.string('name', 128)
                .notNullable()
                .unique()

            tbl.string('description', 255)
        })

        .createTable('tasks', tbl => {
            tbl.increments()

            tbl.string('description', 255)
                .notNullable()

            tbl.string('notes', 255)
            
            tbl.boolean('completed')
                .defaultTo(0)
                .notNullable()
        })

        .createTable('project-resources', tbl => {
            tbl.primary(["project_id", "resources_id"])

            tbl.integer('project-id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")

            tbl.integer('resources_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project-resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
