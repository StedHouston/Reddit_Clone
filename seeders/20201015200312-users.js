'use strict';
const models = require('../models')
const User = models.User
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        firstName: 'Demo',
        lastName: 'User',
        password: '$2a$10$E7ctKDZqr68KgmMY.W3Rxe10uN.70PBN.eELVohUl8hWHt/FwmNC2',
        userName: 'demoUser',
        email: 'demoUser@gmail.com',
        profilePictureUrl: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        firstName: 'Stedman',
        lastName: 'Houston',
        password: '$2a$10$E7ctKDZqr68KgmMY.W3Rxe10uN.70PBN.eELVohUl8hWHt/FwmNC2',
        userName: 'StedHouston',
        email: 'sted@gmail.com',
        profilePictureUrl: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        firstName: 'Kristen',
        lastName: 'Dimmick',
        password: '$2a$10$E7ctKDZqr68KgmMY.W3Rxe10uN.70PBN.eELVohUl8hWHt/FwmNC2',
        userName: 'KD30',
        email: 'kd@gmail.com',
        profilePictureUrl: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        firstName: 'Anh',
        lastName: 'Pham',
        password: '$2a$10$E7ctKDZqr68KgmMY.W3Rxe10uN.70PBN.eELVohUl8hWHt/FwmNC2',
        userName: 'LebronFan23',
        email: 'anh@gmail.com',
        profilePictureUrl: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        firstName: 'Jordan',
        lastName: 'Hilburn',
        password: '$2a$10$E7ctKDZqr68KgmMY.W3Rxe10uN.70PBN.eELVohUl8hWHt/FwmNC2',
        userName: 'TheMarkofJ',
        email: 'jordan@gmail.com',
        profilePictureUrl: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});

  }
};
