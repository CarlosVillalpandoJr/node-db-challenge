
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'book on react app', description: 'has information on react apps'},
        {name: 'Cracking the Coding Interview', description: 'contains practice problems'},
        {name: 'Creddle', description: 'templates for resume'}
      ]);
};
