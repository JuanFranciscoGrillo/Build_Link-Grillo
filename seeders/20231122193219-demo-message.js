'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     * Seeding the Message table with sample messages.
     */
    await queryInterface.bulkInsert('Messages', [{
      senderId: 1, // Assuming user with ID 1 is the sender
      receiverId: 2, // Assuming user with ID 2 is the receiver
      content: 'Hello, how are you?',
      timestamp: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      senderId: 2, // Assuming user with ID 2 is the sender
      receiverId: 1, // Assuming user with ID 1 is the receiver
      content: 'I am fine, thank you!',
      timestamp: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     * Useful for removing the test data.
     */
    await queryInterface.bulkDelete('Messages', null, {});
  }
};
