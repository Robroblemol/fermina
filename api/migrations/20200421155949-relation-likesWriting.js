'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('likesWritings', ['userId'], {
      type: 'FOREIGN KEY',
      name: 'FK_UserId_users_likesWriting',
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }).then(() =>{
      queryInterface.addConstraint('likesWritings', ['writingId'], {
        type: 'FOREIGN KEY',
        name: 'Fk_writingId_likes',
        references: {
          table: 'writings',
          field: 'id',
        },
        onDelete: 'no action',
        onUpdate: 'no action',
      })
      } 

    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
