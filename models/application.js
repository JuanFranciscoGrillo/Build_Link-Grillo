'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Application to User (Many-to-One)
      Application.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });

      // Application to Post (Many-to-One)
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
        model: 'Users',
        key: 'id'
      }
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Posts',
        key: 'id'
      }
    },
    coverLetter: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    resume: {
      type: DataTypes.STRING, // Assuming this is a URL or path to a file
      allowNull: false
    },
    status: {
      type: DataTypes.STRING, // e.g., 'pending', 'accepted', 'rejected'
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Application',
  });

  return Application;
};
