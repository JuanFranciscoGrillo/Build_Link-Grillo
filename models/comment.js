'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * Here I'm setting up relationships between tables. It's crucial for organizing how data interacts.
     */
    static associate(models) {
      // Comment to User (Many-to-One)
      // This means a comment is made by a user. Multiple comments can be made by the same user.
      Comment.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });

      // Comment to Post (Many-to-One)
      // Each comment belongs to a post. A post can have multiple comments.
      Comment.belongsTo(models.Post, {
        foreignKey: 'postId',
        onDelete: 'CASCADE'
      });
    }
  }

  Comment.init({
    text: {
      type: DataTypes.TEXT,
      allowNull: false // Every comment needs text, can't be empty!
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // Linking this to the Users table. Each comment is associated with a user.
        key: 'id'
      }
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Posts', // Linking to Posts. This is how we know which post the comment belongs to.
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Comment', // Naming the model. Sequelize will use this.
  });

  return Comment; // And finally, returning the Comment class. All set!
};
