'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('letters', ['userId'], {
      type: 'FOREIGN KEY',
      name: 'FK_UserId_letter',
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
    return queryInterface.removeConstraint('letters', 'FK_UserId_letter')
  }
};
