'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      username: 'johndoe',
      email: 'johndoe@example.com',
      password: 'securepassword', // Note: In a real app, passwords should be hashed!
      profile_picture: 'path/to/profile.jpg',
      bio: 'This is a bio.',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
