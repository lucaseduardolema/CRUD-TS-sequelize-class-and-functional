'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('restaurants', [
      {
        name: 'Los Pollos Hermanos',
        category: 'Fast Food',
        opening_time: '10:00:00', 
        closing_time: '23:00:00'
      },
      {
        name: 'Central Perk',
        category: 'Coffee House',
        opening_time: '07:00:00', 
        closing_time: '13:30:00'
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('restaurants', null, {});
  }
};
