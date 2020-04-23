'use strict';
module.exports = (sequelize, DataTypes) => {
  const likesWriting = sequelize.define('likesWriting', {
    userId: DataTypes.INTEGER,
    writingId: DataTypes.INTEGER
  }, {});
  likesWriting.associate = function(models) {
    // associations can be defined here
  };
  return likesWriting;
};