'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('letter_writings', ['writingId'], {
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
    return queryInterface.removeConstraint('letter_writings', 'FK_idWritings_letter_writings').then(()=>{
      queryInterface.removeConstraint('letter_writings', 'Fk_idLetter_letter_writings');
  
    })
  }
};
