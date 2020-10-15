'use strict';
const bcrypt = require('bcryptjs');
const { now } = require('sequelize/types/lib/utils');
var hashedPassword;
bcrypt.genSalt(10, function(error, salt){
  bcrypt.hash('password', salt, async (error, hash) => {
      hashedPassword = hash;
  })
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Demo',
        lastName: 'User',
        password: hashedPassword,
        userName: 'demoUser',
        email: 'demoUser@gmail.com',
        profilePictureUrl: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { firstName: 'Stedman',
        lastName: 'Houston',
        password: hashedPassword,
        userName: 'StedHouston',
        email: 'sted@gmail.com',
        profilePictureUrl: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Kristen',
        lastName: 'Dimmick',
        password: hashedPassword,
        userName: 'KD30',
        email: 'kd@gmail.com',
        profilePictureUrl: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { firstName: 'Anh',
        lastName: 'Pham',
        password: hashedPassword,
        userName: 'LebronFan23',
        email: 'anh@gmail.com',
        profilePictureUrl: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { firstName: 'Jordan',
        lastName: 'Hilburn',
        password: hashedPassword,
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
