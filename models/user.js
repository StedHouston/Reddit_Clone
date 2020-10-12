'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    profilePictureUrl: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: "Subscription", // Join table
      otherKey: "subredditId", // Key that points to the other entity
      foreignKey: "userId", //Key that points to this entity
    };
    User.belongsToMany(models.Subreddit, columnMapping);
    // User.belongsTo(models.Post, { foreignKey: 'userId' })
    // User.belongsTo(models.Comment, { foreignKey: 'userId' })
    // User.belongsTo(models.Subreddit, { foreignKey: 'userId' })
  };
  return User;
};
