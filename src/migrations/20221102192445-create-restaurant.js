'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING
      },
      openingTime: {
        allowNull: false,
        type: Sequelize.TIME,
        field: 'opening_time'
      },
      closingTime: {
        allowNull: false,
        type: Sequelize.TIME,
        field: 'closing_time'
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('restaurants');
  }
};