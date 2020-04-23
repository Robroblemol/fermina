'use strict';
module.exports = (sequelize, DataTypes) => {
  const likesWriting = sequelize.define('likesWriting', {
    userId: DataTypes.INTEGER,
    writingId: DataTypes.INTEGER
  }, {});
  likesWriting.associate = function(models) {
    likesWriting.belongsTo(models.Users,{
      foreignKey: 'userId'
    });
    likesWriting.belongsTo(models.writings,{
      foreignKey: 'writingId'
    })
  };
  return likesWriting;
};