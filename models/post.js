'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * I need to define how this model relates to others.
     */
    static associate(models) {
      // Post to User (Many-to-One)
      // Each post is created by a user, but a user can have many posts.
      Post.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE' // If a user is deleted, their posts should be deleted too.
      });

      // Post to Comments (One-to-Many)
      // A post can have many comments, but each comment is linked to only one post.
      Post.hasMany(models.Comment, {
        foreignKey: 'post_id',
        onDelete: 'CASCADE' // Deleting a post should delete its comments.
      });

      // Post to Applications (One-to-Many)
      // Similarly, a post can have many applications.
      Post.hasMany(models.Application, {
        foreignKey: 'post_id',
        onDelete: 'CASCADE' // Deleting a post should also delete its applications.
      });
    }
  }

  Post.init({
    title: DataTypes.STRING, // Title of the post
    description: DataTypes.TEXT, // Detailed description
    location: DataTypes.STRING, // Location of the job or event in the post
    salary: DataTypes.INTEGER, // Salary or compensation info
    company: DataTypes.STRING, // Company or organization associated with the post
    user_id: DataTypes.INTEGER // Linking to the user who created the post
  }, {
    sequelize,
    modelName: 'Post', // Naming the model
  });

  return Post; // And we return the Post class
};
