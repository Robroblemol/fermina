'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Users',
      'password',
      Sequelize.STRING,
      {after:'email'}
      )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Users',
      'password',
      Sequelize.STRING,
      )
  }
};
