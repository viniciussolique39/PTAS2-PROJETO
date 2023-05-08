'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('pessoas', [
      
      {nome: 'Maria',
       idade: 18,
       sobrenome: 'Souza'
      },
      {nome: 'Juliete',
      idade: 25,
      sobrenome: 'Gomes'
      },
      {nome: 'Jamili',
      idade: 28,
      sobrenome: 'Campos'
      },
      {nome: 'Yasmim',
      idade: 17,
      sobrenome: 'Souza'
      },
      {nome: 'Vinicius',
      idade: 46,
      sobrenome: 'Duarte'
  }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
