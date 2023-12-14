const { MongoClient } = require('mongodb');
const log = require('./console-log');
const dbSecret = require('./dev');
const uri = `mongodb+srv://${dbSecret.id}:${dbSecret.password}@cluster0.f5p0apz.mongodb.net/board?retryWrites=true&w=majority`;

module.exports = function (callback) {
  log('Try connect to mongodb');
  return MongoClient.connect(uri, callback);
};
