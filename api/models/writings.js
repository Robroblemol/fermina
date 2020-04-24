'use strict';
module.exports = (sequelize, DataTypes) => {
  const writings = sequelize.define('writings', {
    userId: DataTypes.INTEGER,
    letterId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    mailer: DataTypes.STRING,
    body: DataTypes.TEXT,
    like: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  writings.associate = function(models) {
    writings.belongsTo(models.letter,{
        as:'lettersWritings',
        foreignKey: 'letterId'
      });
    writings.belongsTo(models.Users,{
      as:'onwer',
      foreignKey: 'userId'
    });
    writings.belongsToMany(models.Users,
      {through: 'likesWritings', 
      foreignKey: 'writingId',
      as: 'likes'
    });
  };
  return writings;
};