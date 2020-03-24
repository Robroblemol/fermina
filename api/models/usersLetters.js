'use strict';
module.exports = (sequelize, DataTypes) => {
  const usersLetters = sequelize.define('users_letters', {
    idUser: DataTypes.INTEGER,
    idLetter: DataTypes.INTEGER,
    createAt: DataTypes.DATE,
    update: DataTypes.DATE,
  }, {});
  usersLetters.associate = function(models) {
   
  };
  return usersLetters;
};