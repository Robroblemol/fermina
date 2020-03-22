'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Profiles', [
      {
        userId: 1,
        birthday:'1988-05-30',
        gender: 'm',
        description:'Lobo estepario',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Profiles', null, {});
  }
};
