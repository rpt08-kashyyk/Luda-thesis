var mongoose = require('mongoose');
var db = require('./index.js');
var Promise = require('bluebird');
mongoose.Promise = require('bluebird');
var dataProperties = require('./propertiesData.js');
var dataAmenities = require('./amenitiesData.js');


var importAmenities = function(amenities) {
  var saves = [];
  for (const amenity of amenities) {
    var promise = new Promise(function(resolve, reject) {
      db.Amenities.create(amenity, function(err, entry) {
        if (err) {
          console.log ("cannot save ", err);
          reject (err);
        }
          resolve(entry);
        });
    });
    saves.push(promise);
  }
  return new Promise.all(saves);
};

var importProperties = function(properties) {
  var saves = [];
  for (var property of properties){
    var promise = new Promise(function(resolve, reject){
      db.Property.create(property ,function(err,entry){
        if (err) {
          console.log("Error saving property - ", err);
          reject(err);
        }
        resolve(entry);
      });
    });
    saves.push(promise);
  }
  return new Promise.all(saves);
};


var saveAmenitiesToProperties = function() {
  return new Promise(function (resolve, reject) {
    db.Property.find().cursor()
      .on('data', function(prop) {
        prop.amenities.basic = [mongoose.Types.ObjectId(1), mongoose.Types.ObjectId(2), mongoose.Types.ObjectId(3), mongoose.Types.ObjectId(4), mongoose.Types.ObjectId(6), mongoose.Types.ObjectId(9)];
        prop.amenities.facilities = [mongoose.Types.ObjectId(12), mongoose.Types.ObjectId(13)];
        prop.amenities.kitchen = [mongoose.Types.ObjectId(15), mongoose.Types.ObjectId(16), mongoose.Types.ObjectId(15), mongoose.Types.ObjectId(17), mongoose.Types.ObjectId(15), mongoose.Types.ObjectId(18), mongoose.Types.ObjectId(19), mongoose.Types.ObjectId(20), mongoose.Types.ObjectId(21)];
        prop.save(function(err){
          if(err)
            console.log("couldn't save amenities to prop ", prop.id);
        });
      })
      .on('close', function() {
        console.log("done")
        })
      .on('error', function(err) { reject(err) })
      .on('end', function() { resolve(true) });
  })
};


importAmenities(dataAmenities.amenities)
  .then(function(amenitiesEntry) {
    console.log('saved amenities');
    return importProperties(dataProperties.properties)
   .then(function(){
      saveAmenitiesToProperties()
      .then(function(){
        console.log('saved properties');
      })

   });
  });

////////////////////////////////////////


// var saveUsers = function(users) {
//   var saves = users.map(function(user) {
//     return new Promise(function(resolve, reject) {
//       db.User.create(user, function(err, entry) {
//         if (err) {
//           console.log('WE GOT ERRORS');
//           reject(err);
//         }
//         console.log('saving user ' + user.name);
//         resolve(true);
//       });
//     });
//   });
//   return new Promise.all(saves);
// };

// var getUserId = function(username) {
//   return new Promise(function(resolve, reject) {
//     db.User.find({ name: username }).select('_id').exec()
//       .then(function(id) {
//         resolve(id[0]['_id']);
//       })
//       .catch(function(err) {
//         reject(err);
//       });
//   });
// };

// var saveItineraries = function(itineraries, userId) {
//   var saves = itineraries.map(function(itinerary) {
//     return new Promise(function(resolve, reject) {
//       itinerary.user = userId;
//       db.Itinerary.create(itinerary, function(err, entry) {
//         if (err) {
//           reject(err);
//         }
//         entry.save(function(err) {
//           if (err) {
//             reject(err);
//           }
//           console.log('saving itinerary ' + itinerary.name);
//           resolve(true);
//         });
//       });
//     });
//   });
//   return new Promise.all(saves);
// };

// // var getUserItineraries = function(itineraries, userId) {
// //   return new Promise(function(resolve, reject){
// //     db.User.find({_id: userId}.select('itineraries').exec()
// //       .then(function(results) {
// //         resolve(results[0]);
// //       })
// //       .catch(function(err){
// //         reject(err);
// //       })
// //   })
// // }

// var getItinIds = function(itinNames) {
//   var retrieves = itinNames.map(function(name) {
//     return new Promise(function(resolve, reject) {
//       db.Itinerary.find({ name: name }).select('_id').exec()
//       .then(function(id) {
//         resolve(id[0]['_id']);
//       })
//       .catch(function(err) {
//         reject(err);
//       });
//     });
//   });
//   return new Promise.all(retrieves);
// };

// var saveItinIdsToUser = function(itinIds, userId) {
//   return new Promise(function(resolve, reject) {
//     db.User.findById(userId, function(err, user) {
//       if (err) {
//         reject(err);
//       }
//       user.set({ itineraries: itinIds });
//       user.save(function(err) {
//         if (err) {
//           reject(err);
//         }
//         resolve(true);
//       });
//     });
//   });
// };

// var octoUserId = null;

// saveUsers(data.users)
//   .then(function() {
//     return getUserId('Octodog');
//   })
//   .then(function(userId) {
//     octoUserId = userId;
//     return saveItineraries(data.itineraries, userId);
//   })
//   .then(function() {
//     return getItinIds(data.itineraries.map((itinerary) => itinerary.name));
//   })
//   .then(function(itinIds) {
//     return saveItinIdsToUser(itinIds, octoUserId);
//   })
//   .then(function() {
//     mongoose.disconnect();
//   })
//   .catch(function(error) {
//     return console.error(error);
//   });