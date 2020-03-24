'use strict';
module.exports = (sequelize, DataTypes) => {
  const letter = sequelize.define('letter', {
    idUser: DataTypes.INTEGER,
    addresses: DataTypes.STRING,
    type:DataTypes.STRING,
    createAt: DataTypes.DATE,
    update: DataTypes.DATE,
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