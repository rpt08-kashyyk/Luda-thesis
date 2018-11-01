var mongoose = require('mongoose');
var Promise = require('bluebird');
mongoose.Promise = require('bluebird');
var db = require('../index.js');



// get all the properies in the DB
var getProperties = function() {
  return new Promise(function(resolve, reject) {
    db.Property.find().exec()
      .then(function(props) {
        console.log("Properties controller, props = ", props)
        resolve(props);
      })
      .catch(function(err) {
        reject(err);
      });
  });
};

//get properties with filters
var getPropertiesWithFilter = function(filters) {
  //TODO: parse filters
  // find filtered properties

  // return new Promise(function(resolve, reject) {
  //   db.Property.find({ name: name }).select('_id').exec()
  //     .then(function(id) {
  //       resolve(id._id);
  //     })
  //     .catch(function(err) {
  //       reject(err);
  //     });
  // });
};

// Get the itinerary that corresponds to a particular id
module.exports = {
  getProperties: getProperties,
  getPropertiesWithFilter: getPropertiesWithFilter
};
