'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     * Seeding the Post table with sample data.
     */
    await queryInterface.bulkInsert('Posts', [{
      title: 'Senior Software Engineer',
      description: 'Looking for an experienced software engineer to join our team.',
      location: 'New York, NY',
      salary: 120000,
      company: 'TechCorp',
      user_id: 1, // Assuming a user with ID 1 exists
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Graphic Designer',
      description: 'Seeking a creative graphic designer for our marketing team.',
      location: 'San Francisco, CA',
      salary: 90000,
      company: 'CreativeDesigns',
      user_id: 2, // Assuming a user with ID 2 exists
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     * Useful for removing the test data.
     */
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
