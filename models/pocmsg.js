'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pomsg = sequelize.define('pocmsg', {
    poid: {type: DataTypes.INTEGER, primaryKey: true},
    warehouse: DataTypes.STRING,
    item: DataTypes.STRING,
    podate: DataTypes.DATE,
    pomsgeq : DataTypes.STRING,
    pomsg : DataTypes.TEXT
  },
  {
    timestamps: false,
    freezeTableName: true
  }); 
/* 
CREATE TABLE `pocdb`.`pocmsg` (
  `poid` INT(11) NOT NULL,
  `warehouse` VARCHAR(45) NULL,
  `item` VARCHAR(45) NULL,
  `podate` DATE NULL,
  `pomsgeq` VARCHAR(45) NULL,
  `pomsg` TEXT NULL,
  PRIMARY KEY (`poid`),
  UNIQUE INDEX `poid_UNIQUE` (`poid` ASC) VISIBLE);

*/
  /* Task.associate = function (models) {
    models.Task.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  }; */

  return Pomsg;
};
