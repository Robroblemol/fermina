'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Profiles', ['userId'], {
          type: 'FOREIGN KEY',
          name: 'FK_UserId',
          references: {
            table: 'Users',
            field: 'id',
          },
          onDelete: 'no action',
          onUpdate: 'no action',
        }
      )
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Profiles', 'FK_UserId')
    
  }
};
