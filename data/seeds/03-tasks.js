
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'read chapter 4 of book', notes: 'react-app-start', completed: false, project_id: 1},
        {description: 'study big O', notes: 'O(n^2)', completed: false, project_id: 2},
        {description: 'choose a template', notes: 'the blue one', completed: false, project_id: 3}
      ]);
};
