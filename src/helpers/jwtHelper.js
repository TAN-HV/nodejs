const jwt = require('jsonwebtoken');
/*
var user = {
    _id: '',
    name : '',
    email : ''
}
*/
jwt.sign(data, secretKey, {
    algorithm: 'HS256',
    expiresIn: 36,
});

let generateToken = (data, secretKey, tokenLife) => {
    return new Promise((resolve, reject) => {
        jwt.sign(data, secretKey, tokenLife, (err, token) => {
            if (err) {
                return reject(error);
            }
            return resolve(token);
        });
    });
};

let verifyToken = (token, secretKey) => {
    return new Promise((resolve, reject) => {
        jwt.decode(token, secretKey, (err, decode) => {
            if (err) {
                return reject(err);
            }
            return resolve(decode);
        });
    });
};

module.exports = generateToken;
