const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const loginController = require("../app/controllers/LoginController");
const User = require('../models/register');
// router.get("/", loginController.login);

module.exports = router;
