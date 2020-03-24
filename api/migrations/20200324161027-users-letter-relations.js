'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('users_letters', ['userId'], {
      type: 'FOREIGN KEY',
      name: 'FK_UserId_users_letters',
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }
  ).then(() =>{
    queryInterface.addConstraint('users_letters', ['letterId'], {
      type: 'FOREIGN KEY',
      name: 'Fk_idLetter',
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
  return queryInterface.removeConstraint('users_letters', 'FK_UserId_users_letters').then(()=>{
    queryInterface.removeConstraint('users_letters', 'Fk_idLetter');

  })
    
  }
};
