'use strict';
const {
  Model, DataTypes
} = require('sequelize');
const { sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Login_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Login_user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    semester: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Login_user',
  });
  return Login_user;
};

// module.exports = (sequelize, DataTypes) => {
//   class Profile extends Model {
//     static associate(models){

//     }
//   }
//   Profile.init({
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     semester: DataTypes.INTEGER,
//     roll_number: DataTypes.STRING,
//     enrollment_number: DataTypes.STRING,
//     phone_number: DataTypes.INTEGER,
//     profilepic: DataTypes.BLOB
//   }, {
//     sequelize,
//     modelName: 'Profile',
//   });
//   return Profile;
// }