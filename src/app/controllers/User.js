const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const User = new Schema(
    {
        fullname: String,
        img: String,
        email: String,
        password: String,
    },
    { collection: 'user' },
);

module.exports = mongoose.model('User', User);
