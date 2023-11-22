'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * Time to define relationships for the User model.
     */
    static associate(models) {
      // One-to-Many with Post
      // A user can create many posts but each post belongs to one user.
      User.hasMany(models.Post, {
        foreignKey: 'user_id',
        as: 'posts', // Giving an alias for easier access
        onDelete: 'CASCADE' // If a user is deleted, their posts should also be removed.
      });

      // One-to-Many with Comment
      // A user can make many comments, but each comment is linked to one user.
      User.hasMany(models.Comment, {
        foreignKey: 'user_id',
        as: 'comments', // Alias for accessing a user's comments
        onDelete: 'CASCADE' // Deleting a user should delete their comments.
      });

      // One-to-Many with Application
      // Users can have many applications, but each application is tied to one user.
      User.hasMany(models.Application, {
        foreignKey: 'user_id',
        as: 'applications', // Alias to access applications made by the user
        onDelete: 'CASCADE' // If a user is deleted, their applications should be deleted too.
      });

      // Self-Referential Many-to-Many for Messages
      // Users can send and receive messages. This sets up two relations for the same user.
      User.hasMany(models.Message, {
        foreignKey: 'sender_id',
        as: 'sentMessages' // Messages sent by the user
      });
      User.hasMany(models.Message, {
        foreignKey: 'receiver_id',
        as: 'receivedMessages' // Messages received by the user
      });
    }
  }

  User.init({
    username: DataTypes.STRING, // The user's username
    email: DataTypes.STRING, // Email address
    password: DataTypes.STRING, // User's password, should be hashed in real-world scenarios
    profile_picture: DataTypes.STRING, // URL or path to the profile picture
    bio: DataTypes.TEXT // Short biography or description of the user
  }, {
    sequelize,
    modelName: 'User', // Naming the model
  });

  return User; // Returning the defined User class
};
