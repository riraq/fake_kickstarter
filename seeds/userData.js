const { User } = require('../models');

const userData = [
  {
    name: 'Terry Brown',
    email: 'ilovecereal@gmail.com',
    password: 'ra1s1nBranCrunch12'
  },
  {
    name: 'Rose Wright',
    email: 'theaterkid@ymail.com',
    password: 'shakespeer1656'
  },
  {
    name: 'Olivia Luxembourg',
    email: 'fancy@olivia.com',
    password: 'alskdjfhg102938'
  },
  {
    name: 'Charles MacKenzie',
    email: 'irishwristwatch@yahoo.com',
    password: 'plaid4Life'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
