'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('letter_writings', ['writtenId'], {
      type: 'FOREIGN KEY',
      name: 'FK_idWritings_letter_writings',
      references: {
        table: 'writings',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }
  ).then(() =>{
    queryInterface.addConstraint('letter_writings', ['letterId'], {
      type: 'FOREIGN KEY',
      name: 'Fk_idLetter_letter_writings',
      references: {
        table: 'letters',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    })

  })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
