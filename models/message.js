'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Message to User (Many-to-One) for Sender
      Message.belongsTo(models.User, {
        foreignKey: 'senderId',
        as: 'Sender'
      });

      // Message to User (Many-to-One) for Receiver
      Message.belongsTo(models.User, {
        foreignKey: 'receiverId',
        as: 'Receiver'
      });
    }
  }

  Message.init({
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    receiverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    content: DataTypes.TEXT,
    timestamp: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Message',
  });

  return Message;
};
