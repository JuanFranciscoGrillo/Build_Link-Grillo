'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // One-to-Many with Post
      User.hasMany(models.Post, {
        foreignKey: 'user_id',
        as: 'posts',
        onDelete: 'CASCADE'
      });

      // One-to-Many with Comment
      User.hasMany(models.Comment, {
        foreignKey: 'user_id',
        as: 'comments',
        onDelete: 'CASCADE'
      });

      // One-to-Many with Application
      User.hasMany(models.Application, {
        foreignKey: 'user_id',
        as: 'applications',
        onDelete: 'CASCADE'
      });

      // Self-Referential Many-to-Many for Messages
      // Assuming you have a Message model where 'sender_id' and 'receiver_id' are the fields
      User.hasMany(models.Message, {
        foreignKey: 'sender_id',
        as: 'sentMessages'
      });
      User.hasMany(models.Message, {
        foreignKey: 'receiver_id',
        as: 'receivedMessages'
      });
    }
  }

  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_picture: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
