'use strict';
module.exports = (sequelize, DataTypes) => {
  const writings = sequelize.define('writings', {
    userId: DataTypes.INTEGER,
    letterId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    mailer: DataTypes.STRING,
    body: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
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