'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [
      {
        title: 'Facebook vai dividir departamento de realidade aumentada e virtual',
        author: 'Renan',
        category: 'tecnologia',
        publication_date: '2021-10-26'
      },
      {
        title: 'O que é UDP e quais as diferenças com o TCP?',
        author: 'Giulianna',
        category: 'tecnologia',
        publication_date: '2021-10-26'
      },
    ], {
      underscored: true
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
