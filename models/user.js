'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    mail: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    getterMethods: {
      users() {
        delete this.dataValues.password;
        return this.getDataValue();
      }
    }
  });

  User.associate = function (models) {};

  User.prototype.full = function () {
    return {mail: this.dataValues.mail, password: this.dataValues.password};
  };

  return User;
};