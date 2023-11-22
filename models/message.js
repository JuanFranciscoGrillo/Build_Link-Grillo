'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * Now, I need to set up relationships for the Message model.
     */
    static associate(models) {
      // Message to User (Many-to-One) for Sender
      // Each message has one sender, but a user can send many messages.
      Message.belongsTo(models.User, {
        foreignKey: 'senderId',
        as: 'Sender' // Naming this association as 'Sender' for clarity.
      });

      // Message to User (Many-to-One) for Receiver
      // Similarly, each message has one receiver, and a user can receive many messages.
      Message.belongsTo(models.User, {
        foreignKey: 'receiverId',
        as: 'Receiver' // Naming this association as 'Receiver'.
      });
    }
  }

  Message.init({
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // This is linking senderId to Users' table
        key: 'id'
      }
    },
    receiverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // This is linking receiverId to Users' table
        key: 'id'
      }
    },
    content: DataTypes.TEXT, // Storing the message content here
    timestamp: DataTypes.DATE // The time when the message was sent
  }, {
    sequelize,
    modelName: 'Message', // Naming the model
  });

  return Message; // Don't forget to return the class!
};
