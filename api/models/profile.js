'use strict';
// const users = require('../models/users');

module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    userId: DataTypes.INTEGER,
    alias: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    gender: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.belongsTo(models.Users,{
      through: 'Users',
      as:'Users',
      foreignKey: 'userId'
    })
  };
  return Profile;
};