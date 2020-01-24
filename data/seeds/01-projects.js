
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'React App', description: 'make a react app', completed: false},
        {name: 'Codewars', description: 'practice problems', completed: false},
        {name: 'Resume', description: 'finish resume', completed: false}
    ]);
};
