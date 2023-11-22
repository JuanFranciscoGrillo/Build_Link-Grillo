// ###C:\Users\ricar\repos\Build_Link-Grillo\seeders\20231122193331-demo-application.js
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     * Seeding the Application table with sample data.
     */
    await queryInterface.bulkInsert('Applications', [{
      userId: 1, // Assuming a user with ID 1 exists
      postId: 1, // Assuming a post with ID 1 exists
      coverLetter: 'I am very interested in this position and believe my skills are a perfect match.',
      resume: 'path/to/resume1.pdf', // Assuming this is a URL or path to a file
      status: 'pending', // The current status of the application
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 2, // Assuming a user with ID 2 exists
      postId: 2, // Assuming a post with ID 2 exists
      coverLetter: 'With my extensive experience, I am confident in my ability to contribute to the team.',
      resume: 'path/to/resume2.pdf', // Assuming this is a URL or path to a file
      status: 'pending', // The current status of the application
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     * Useful for removing the test data.
     */
    await queryInterface.bulkDelete('Applications', null, {});
  }
};
