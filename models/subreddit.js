'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subreddit = sequelize.define('Subreddit', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    members: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bannerUrl: {
      type: DataTypes.STRING,
    },
    profileUrl: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  Subreddit.associate = function(models) {
    const columnMapping = {
      through: 'Subscriptions',
      otherKey: 'userId',
      foreignKey: 'subredditId',
    }
    Subreddit.belongsToMany(models.User, columnMapping);
    Subreddit.hasMany(models.Post, { foreignKey: 'subredditId' })

  };
  return Subreddit;
};
