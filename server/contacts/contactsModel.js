// contactsModel.js

module.exports = function (sequelize, DataTypes) {
  var Contact = sequelize.define('Contact', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    interval: DataTypes.INTEGER,
    nextdate: DataTypes.DATE
  });

  return Contact;
};
