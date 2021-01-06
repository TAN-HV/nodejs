// const { mongooseToObject } = require("../../util/mongoose");

class LoginController {
    // [GET] /courses/:slug
    login(req, res, next) {
        // res.json({ msg: "token" });
        res.render('login');
    }
}

module.exports = new LoginController();
