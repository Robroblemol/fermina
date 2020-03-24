'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('writings', ['userId'], {
          type: 'FOREIGN KEY',
          name: 'FK_UserId_writings',
          references: {
            table: 'Users',
            field: 'id',
          },
          onDelete: 'no action',
          onUpdate: 'no action',
        }
      ).then(() => {
        queryInterface.addConstraint('writings', ['letterId'], {
          type: 'FOREIGN KEY',
          name: 'Fk_idLetter_writings',
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
    return queryInterface.removeConstraint('writings', 'FK_UserId_writings').then(() =>{
      queryInterface.removeConstraint('writings', 'Fk_idLetter_writings');
    })
    
  }
};
