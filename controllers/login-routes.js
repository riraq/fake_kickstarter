const router = require('express').Router();
const {Project } = require('../models');

// GET all projects for homepage
router.get('/', async (req, res) => {
  try {
    const dbProjectData = await Project.findAll({
      include: [
        {
          model: Project
        },
      ],
    });

    const projects = dbProjectData.map((project) =>
      project.get({ plain: true })
    );

    res.render('homepage', {
      projects,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
