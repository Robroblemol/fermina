'use strict';
module.exports = (sequelize, DataTypes) => {
  const letter = sequelize.define('letter', {
    userId: DataTypes.INTEGER,
    addresse: DataTypes.STRING,
    type: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  letter.associate = function(models) {
    letter.belongsToMany(models.writings,{
      through: 'letter_writings',
      as:'lettersWritings',
      foreignKey: 'idWriting'
    })
    // associations can be defined here
  };
  return letter;
};