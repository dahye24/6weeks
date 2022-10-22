'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

<<<<<<< HEAD
    Comments.init({
        commentId: {
            primaryKey: true,
            type      : DataTypes.INTEGER,
        },
        postId   : DataTypes.INTEGER,  //닉네임 없어도 되나요??
        userId   : DataTypes.INTEGER,
        comment  : DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Comments',
    });
    return Comments;
=======
  Comments.init({
    commentId: {
      primaryKey: true,
      type      : DataTypes.INTEGER,
    },
    postId   : DataTypes.INTEGER,
    loginId   : DataTypes.STRING,
    comment  : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
>>>>>>> e07761eed8cb8dff143248fdf8284e271066959c
};