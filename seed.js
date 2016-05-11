/*

 This seed file is only a placeholder. It should be expanded and altered
 to fit the development of your application.

 It uses the same file the server uses to establish
 the database connection:
 --- server/db/index.js

 The name of the database used is set in your environment files:
 --- server/env/*

 This seed file has a safety check to see if you already have users
 in the database. If you are developing multiple applications with the
 fsg scaffolding, keep in mind that fsg always uses the same database
 name in the environment files.

 */

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = mongoose.model('User');
var Group = mongoose.model('Group');

var wipeCollections = function () {
  var removeUsers = User.remove({});
  return Promise.all([
    removeUsers
  ]);
};

var seedUsersWithGroups = function () {

  return Group.create({ name: "Employees", requests: [] })
    .then(group => {
      var users = [
        {
          email: 'user@user.com',
          password: 'user',
          groups: [group],
          title: 'Employee'
        },
        {
          email: 'admin@admin.com',
          password: 'admin',
          managedGroups: [group],
        }
      ];

      return User.create(users);

    });

};

connectToDb
  .then(function () {
    return wipeCollections();
  })
  .then(function () {
    return seedUsersWithGroups();
  })
  .then(function () {
    console.log(chalk.green('Seed successful!'));
    process.kill(0);
  })
  .catch(function (err) {
    console.error(err);
    process.kill(1);
  });
