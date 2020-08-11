'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    userId: DataTypes.INTEGER, AllowNull: false,
    subredditId: DataTypes.INTEGER, AllowNull: false,
  }, {});
  Subscription.associate = function(models) {
    // associations can be defined here
  };
  return Subscription;
};
