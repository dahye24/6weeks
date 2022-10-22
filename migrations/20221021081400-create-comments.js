'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
<<<<<<< HEAD
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Comments', {   //nickname 없어도 되는지??
            commentId: {
                allowNull    : false,
                autoIncrement: true,
                primaryKey   : true,
                type         : Sequelize.INTEGER
            },
            postId   : {
                type: Sequelize.INTEGER
            },
            userId   : {
                type: Sequelize.INTEGER
            },
            comment  : {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type     : Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type     : Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Comments');
    }
=======
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      commentId: {
        allowNull    : false,
        autoIncrement: true,
        primaryKey   : true,
        type         : Sequelize.INTEGER
      },
      postId   : {
        type: Sequelize.INTEGER
      },
      loginId   : {
        type: Sequelize.STRING
      },
      comment  : {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type     : Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type     : Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments');
  }
>>>>>>> e07761eed8cb8dff143248fdf8284e271066959c
};