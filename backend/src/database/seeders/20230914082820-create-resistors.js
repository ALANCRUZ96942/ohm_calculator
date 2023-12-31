'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      let resistors = [
        {
          name:'Pink',
          multipler: 0.001,
          color: '#d8a0a6',
          tolerance:null,
        },
        {
          name:'Silver',
          multipler: 0.01,
          color:'#c0c0c0',
          tolerance: 10,
        },
        {
          name:'Gold',
          multipler: 0.1,
          color:'#ffd700',
          tolerance: 5,
        },
        {
          name:'Black',
          multipler: 1,
          color:'#000000',
          tolerance:null,
        },
        {
          name:'Brown',
          multipler:10,
          color:'#7e4b26',
          tolerance:1,
        },
        {
          name:'Red',
          multipler:100,
          color:'#a72920',
          tolerance:2,
        },
        {
          name:'Orange',
          multipler:1000,
          color:'#f67828',
          tolerance:3,
        },
        {
          name:'Yellow',
          multipler:10000,
          color:'#f6b600',
          tolerance:4,
        },
        {
          name:'Green',
          multipler:100000,
          color:'#61993b',
          tolerance:0.5,
        },
        {
          name:'Blue',
          multipler:1000000,
          color:'#007cb0',
          tolerance:0.25,
        },
        {
          name:'Violet',
          multipler:10000000,
          color:'#76689a',
          tolerance:0.1,
        },
        {
          name:'Gray',
          multipler:100000000,
          color:'#7a888e',
          tolerance:0.05,
        },
        {
          name:'White',
          multipler:1000000000,
          color:'#FFFFFF',
          tolerance:null,
        },
      ];

      await queryInterface.bulkInsert('resistors', resistors, {});
   
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('resistors', null, {});
   
  }
};
