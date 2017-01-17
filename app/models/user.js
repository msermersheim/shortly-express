var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var crypto = require('crypto');
var Click = require('./click');




var User = db.Model.extend({
  tableName: 'user',
  hasTimestamps: true
});

module.exports = User;
