
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('project-resources').insert([
        {project_id: 1, resources_id: 1},
        {project_id: 2, resources_id: 2},
        {project_id: 3, resources_id: 3}
      ]);
};
