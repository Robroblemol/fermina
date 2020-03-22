'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Users',
      'status',
      Sequelize.BOOLEAN,
      {after:'email'}
      )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Users',
      'status',
      Sequelize.BOOLEAN,
      )
  }
};
