'use strict';

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _index = require('../config/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  used to create JWT for sites authentication process
// importing JWT module
var verifyToken = function verifyToken(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.headers['x-access-token'];
    if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });

    // verifies secret and checks exp
    _jsonwebtoken2.default.verify(token, _index2.default.secret, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        // if everything is good, save to request for use in other routes
        req.userId = decoded.id;
        next();
    });
};
// Importing config file to define cross app variables


module.exports = {
    verifyToken: verifyToken
};
//# sourceMappingURL=authMiddleware.js.map