'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     * Seeding the Comment table with sample comments.
     */
    await queryInterface.bulkInsert('Comments', [{
      text: 'This is an insightful post. Thanks for sharing!',
      userId: 1, // Assuming a user with ID 1 exists
      postId: 1, // Assuming a post with ID 1 exists
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Great article. Really enjoyed reading it!',
      userId: 2, // Assuming a user with ID 2 exists
      postId: 2, // Assuming a post with ID 2 exists
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     * Useful for removing the test data.
     */
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
