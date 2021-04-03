const { Project } = require('../models');

const projectData = [
  {
    name: 'Celebrity Astrology',
    description: 'An app for the stars',
    date_created: 'June 21, 2020 17:00:00',
    needed_funding: 10293489.00,
    user_id: 1329
  },
  {
    name: 'Dog Cam',
    description: 'A supervisor for your dog while you are away.',
    date_created: 'September 22, 2020 22:00:00',
    needed_funding: 120.00,
    user_id: 4324
  },
  {
    name: 'Clever Comebacks',
    description: 'We are clever so you never have to be.',
    date_created: 'December 21, 2020 20:30:00',
    needed_funding: 19283.00,
    user_id: 3029
  },
  {
    name: 'Is It Wednesday?',
    description: 'An app that clarifies whether or not it is that special day of the week.',
    date_created: 'March 19, 2020 19:00:00',
    needed_funding: 52.00,
    user_id: 1109
  },
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;
