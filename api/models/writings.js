'use strict';
module.exports = (sequelize, DataTypes) => {
  const writings = sequelize.define('writings', {
    idUser: DataTypes.INTEGER,
    title: DataTypes.STRING,
    mailer: DataTypes.STRING,
    body: DataTypes.TEXT,
    createAt: DataTypes.DATE,
    update: DataTypes.DATE,
  }, {});
  writings.associate = function(models) {
    writings.belongsTo(models.letter,{
      through: 'letter_writings',
      as:'lettersWritings',
      foreignKey: 'userId'
    })
    // associations can be defined here
  };
  return writings;
};