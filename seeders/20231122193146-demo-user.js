'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Here we are seeding the User table with some demo data.
     */
    await queryInterface.bulkInsert('Users', [{
      username: 'JohnDoe',
      email: 'johndoe@example.com',
      password: 'hashedpassword123', // Remember to hash passwords in production
      profile_picture: 'path/to/johndoe/pic',
      bio: 'Just a regular John Doe.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'JaneDoe',
      email: 'janedoe@example.com',
      password: 'hashedpassword321', // Remember to hash passwords in production
      profile_picture: 'path/to/janedoe/pic',
      bio: 'Jane Doe here, nice to meet you.',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     * This is useful when you want to clear out the test data.
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
