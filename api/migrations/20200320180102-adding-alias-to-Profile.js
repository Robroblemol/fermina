'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Profiles',
      'alias',
      Sequelize.STRING,
      {after:'userId'}
      )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Profiles',
      'alias',
      Sequelize.STRING,
      )
  }
};
