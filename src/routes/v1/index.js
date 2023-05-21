const express = require('express');
const categoryRoute = require('./category.route');
const taskRoute = require('./task.route');
const router = express.Router();

const defaultRoutes = [

  {
    path: '/category',
    route: categoryRoute,
  },
  {
    path: '/task',
    route: taskRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
