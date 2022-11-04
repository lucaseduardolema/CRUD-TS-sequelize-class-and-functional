'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING
      },
      publicationDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'publication_date',
        defaulValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};