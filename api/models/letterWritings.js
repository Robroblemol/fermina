'use strict';
module.exports = (sequelize, DataTypes) => {
  const letter_writings = sequelize.define('letter_writings', {
    idLetter: DataTypes.INTEGER,
    idWriting: DataTypes.INTEGER,
    createAt: DataTypes.DATE,
    update: DataTypes.DATE,
  }, {});
  letter_writings.associate = function(models) {
    // associations can be defined here
  };
  return letter_writings;
};