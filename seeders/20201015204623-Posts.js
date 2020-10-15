'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Posts', [
        {
          title: '80% of BTC are mined in China, mining equipment is overwhelmingly made in China, and a relatively small number of mostly Chinese mining pools / miners are keeping up the blockchain. Are you worried about this centralization? If not, why not?',
          content: 'Couple folks asked for my source. It’s from the book “Bubble or Revolution” by Mehta, Agasha, and Detroja which I’m reading now (and is pretty good) dated 2019. I know that’s harder to check than a link though.',
          rating: 0,
          userId: 2,
          subredditId: 1,
          pictureUrl: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'People who have been into BTC for 3+ years, what has it been like?',
          content: 'How did you get into it? Did you invest a lot before the initial 20k run?',
          rating: 0,
          userId: 2,
          subredditId: 1,
          pictureUrl: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Bitcoin on exchanges.',
          content: 'Are Exchanges allowed to leverage bitcoin or crypto? So if users hold 1000 BTC on Coinbase. Does coinbase absolutely 100% own 1000 BTC behind the scenes or can they leverage it like a bank, and own less?',
          rating: 0,
          userId: 2,
          subredditId: 1,
          pictureUrl: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'My partner is sure he bought bitcoin in 2010. How to access it?',
          content: 'Hi everyone! This might be a funny post but for the past days my boyfriend says he has been starting to remember buying about a $100 or $200 worth of bitcoin in 2010. He says he has no idea where, on which platform or where it’s stored right now. Does anyone remember where you could buy it back then and how we could access it if that’s still possible? Thank you for any help!',
          rating: 0,
          userId: 2,
          subredditId: 1,
          pictureUrl: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Posts', null, {});
  }
};
