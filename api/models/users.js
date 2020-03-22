'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: {
        type:DataTypes.STRING,
        allowNull: false,
      },
    lastname: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {});
  Users.associate = function(models) {
    // Users.belongsTo(models.Users,{
    //   through: 'Users',
    //   as: 'Users',
    //   foreignKey: 'id',
    // })
  };
  return Users;
};  