'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Posts.init({
    userId: DataTypes.INTEGER,
    typeofpet: DataTypes.STRING,
    category: DataTypes.STRING,
    subcategory: DataTypes.STRING,
    title: DataTypes.STRING,
    maker: DataTypes.STRING,
    product: DataTypes.STRING,
    content: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};