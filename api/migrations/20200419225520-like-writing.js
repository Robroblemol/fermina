'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'writings',
      'like',
      Sequelize.INTEGER,
      {after: 'body'}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'writings',
      'like',
      Sequelize.INTEGER,
      )
  }
};
