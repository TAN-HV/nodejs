const { mongooseToObject } = require('../../util/mongoose');

class LoginController {
    // [GET] /courses/:slug
    login(req, res, next) {
        res.json({ msg: 'token' });
    }
}

module.exports = new LoginController();
