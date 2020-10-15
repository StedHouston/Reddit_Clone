'use strict';

const { now } = require("sequelize/types/lib/utils");

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('People', [
        {
          title: 'Bitcoin',
          description: 'A community dedicated to Bitcoin, the currency of the Internet. Bitcoin is a distributed, worldwide, decentralized digital money. Bitcoins are issued and managed without any central authority whatsoever: there is no government, company, or bank in charge of Bitcoin. You might be interested in Bitcoin if you like cryptography, distributed peer-to-peer systems, or economics. A large percentage of Bitcoin enthusiasts are libertarians, though people of all political philosophies are welcome.',
          userId: 2,
          members: 1000,
          bannerUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/bitcoin_banner.png',
          profileUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/bitcoin_button.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'NBA',
          description: 'A subreddit dedicated for NBA news and discussion.',
          userId: 3,
          members: 30000,
          bannerUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/nba_banner.png',
          profileUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/nba_button.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Jokes',
          description: 'The funniest sub on reddit. Hundreds of jokes posted each day, and some of them arent even reposts!',
          userId: 3,
          members: 1000,
          bannerUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/jokes_banner.png',
          profileUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/jokes_button.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Street Fighter',
          description: 'Street Fighter video game series The subs mission is to build the fighting game community, harbor a healthy competitive nature, and be welcoming to players and fans alike.',
          userId: 2,
          members: 1000,
          bannerUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/streetfighter_banner.png',
          profileUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/streetfighter_icon.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Investing',
          description: 'Lose Money with friends!',
          userId: 4,
          members: 1000,
          bannerUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/investing_banner.png',
          profileUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/investing_button.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Rick and Morty',
          description: 'This is the subreddit for fans of Dan Harmon & Justin Roilands animated series, Rick and Morty.',
          userId: 5,
          members: 1000,
          bannerUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/bitcoin_banner.png',
          profileUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/bitcoin_button.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Legends of Runeterra',
          description: 'Set in the League of Legends universe, Legends of Runeterra is the strategy card game created by Riot Games where skill, creativity, and cleverness determine your success.',
          userId: 2,
          members: 1000,
          bannerUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/legendsofruneterra_banner.png',
          profileUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/legendsofruneterra_button.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Hearthstone',
          description: 'For fans of Blizzard Entertainments digital card game, Hearthstone.',
          userId: 3,
          members: 1000,
          bannerUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/hearthstone_banner.png',
          profileUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/hearthstone_button.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Programming',
          description: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. (Martin Golding)',
          userId: 4,
          members: 1000,
          bannerUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/programming_banner.png',
          profileUrl: 'https://welp-app-s3.s3.us-east-2.amazonaws.com/programming_button.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subreddits', null, {});
  }
};
