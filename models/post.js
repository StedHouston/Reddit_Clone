'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subredditId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pictureUrl: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // Post.belongsTo(models.Subreddit, { foreignKey: 'postId' });
    // Post.belongsTo(models.Comment, { foreignKey: 'postId' });
  };
  return Post;
};
