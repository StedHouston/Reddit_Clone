'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
       type: DataTypes.INTEGER,
       allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subredditId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Comment.associate = function(models) {

  };
  return Comment;
};
