'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'macbook pro 16',
        brand: 'apple',
        price: 3600,
        manufacturing_date: '2021-10-25',
        expiration_date: '2026-10-25'
      },
      {
        name: 'surface pro',
        brand: 'microsoft',
        price: 2500,
        manufacturing_date: '2021-10-25',
        expiration_date: '2024-10-25'
      },
      {
        name: 'alienware',
        brand: 'dell',
        price: 2000,
        manufacturing_date: '2021-10-25',
        expiration_date: '2022-10-25'
      },
      {
        name: 'alienware expired',
        brand: 'dell',
        price: 2000,
        manufacturing_date: '2015-10-25',
        expiration_date: '2016-10-25'
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
