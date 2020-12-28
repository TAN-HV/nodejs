const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/LoginController');
router.get('/', loginController.login);

// router.get("/stored/courses", meController.storedCourses);

module.exports = router;
