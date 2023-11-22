'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * Okay, so here I'm setting up associations. It's like telling the database how different tables are related.
     */
    static associate(models) {
      // Application to User (Many-to-One)
      // Each application is linked to a user. It's a Many-to-One relation because many applications can be linked to one user.
      Application.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });

      // Application to Post (Many-to-One)
      // Similar to users, each application is tied to a post. Again, many applications can belong to one post.
      Application.belongsTo(models.Post, {
        foreignKey: 'postId',
        onDelete: 'CASCADE'
      });
    }
  }

  Application.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // Linking to the Users table here
        key: 'id'
      }
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Posts', // And this one links to the Posts table
        key: 'id'
      }
    },
    coverLetter: {
      type: DataTypes.TEXT,
      allowNull: false // Can't submit an application without a cover letter!
    },
    resume: {
      type: DataTypes.STRING, // Assuming this is a URL or path to a file
      allowNull: false // Resume is mandatory too
    },
    status: {
      type: DataTypes.STRING, // e.g., 'pending', 'accepted', 'rejected'
      allowNull: false // Status is required to track the application's progress
    }
  }, {
    sequelize,
    modelName: 'Application', // This is the name of our model in Sequelize
  });

  return Application; // Don't forget to return the class!
};
