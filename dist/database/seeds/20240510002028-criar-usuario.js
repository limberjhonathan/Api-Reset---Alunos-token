"use strict";const bycryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'jhonathan Draw1',
          sobrenome: 'Draw',
          email: 'draw1@gmail.com',
          password_hash: await bycryptjs.hash('123456789', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'jhonathan Draw2',
          sobrenome: 'Draw',
          email: 'draw2@gmail.com',
          password_hash: await bycryptjs.hash('123456789', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'jhonathan Draw3',
          sobrenome: 'Draw',
          email: 'draw3@gmail.com',
          password_hash: await bycryptjs.hash('123456789', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'jhonathan Draw4',
          sobrenome: 'Draw',
          email: 'draw4@gmail.com',
          password_hash: await bycryptjs.hash('123456789', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: () => {},
};

// npx sequelize db:seed:all
