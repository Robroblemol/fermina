'use strict';
module.exports = (sequelize, DataTypes) => {
  const letter_writings = sequelize.define('letter_writings', {
    letterId: DataTypes.INTEGER,
    writingId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  letter_writings.associate = function(models) {
    letter_writings.belongsTo(models.letter,{
      foreignKey: 'letterId'
    });
    letter_writings.belongsTo(models.writings,{
      foreignKey: 'writingId'
    });

  };
  return letter_writings;
};