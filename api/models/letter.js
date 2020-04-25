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
    letter.belongsTo(models.Users,{
      as:'onwer',
      foreignKey: 'userId'
    });
    letter.belongsToMany(models.writings,{
      through: 'letter_writings',
      as:'lettersWritings',
      foreignKey: 'letterId'
    }); 

  };
  return letter;
};