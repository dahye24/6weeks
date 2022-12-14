'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Posts', {
            postId     : {
                allowNull    : false,
                autoIncrement: true,
                primaryKey   : true,
                type         : Sequelize.INTEGER
            },
            loginId    : {
                type: Sequelize.STRING,
            },
            typeofpet  : {
                type: Sequelize.STRING
            },
            category   : {
                type: Sequelize.STRING
            },
            subcategory: {
                type: Sequelize.STRING
            },
            title      : {
                type: Sequelize.STRING
            },
            maker      : {
                type: Sequelize.STRING
            },
            product    : {
                type: Sequelize.STRING
            },
            content    : {
                type: Sequelize.STRING
            },
            photo      : {
                type: Sequelize.STRING
            },
            likes      : {
                type   : Sequelize.INTEGER,
                default: 0
            },
            createdAt  : {
                allowNull: false,
                type     : Sequelize.DATE
            },
            updatedAt  : {
                allowNull: false,
                type     : Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Posts');
    }
};