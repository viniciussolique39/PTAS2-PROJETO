'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {nome: 'John Doe'},
      {nome: 'Estevao Ferreira'},
      {nome: 'Miniatura'},
      {nome: 'Taylor'},
      {nome: 'Loira do tchan'},
      {nome: 'Dinhoto'}

    ], {});
  },
    
  

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }

};