var mongoose = require('mongoose');
var db = require('./index.js');
var Promise = require('bluebird');
mongoose.Promise = require('bluebird');
var dataProperties = require('./propertiesData.js');
var dataAmenities = require('./amenitiesData.js');

//mongoose.connect('mongodb://localhost:27017/firebnb');
//var db = mongoose.connection;

//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function() {
//  console.log('Mongoose connected!');
//});

var importAmenities = function(amenities) {
  var saves = [];
  for (const amenity of amenities) {
    var promise = new Promise(function(resolve, reject) {
    //  amenity._id = mongoose.Types.ObjectId(amenity._id)
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
  //  property._id = mongoose.Types.ObjectId(property._id)
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

///////////
var saveItinIdsToUser = function(itinIds, userId) {
  return new Promise(function(resolve, reject) {
    db.User.findById(userId, function(err, user) {
      if (err) {
        reject(err);
      }
      user.set({ itineraries: itinIds });
      user.save(function(err) {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
    });
  });
};

///////////


var saveAmenitiesToProperties = function() {
  return new Promise(function (resolve, reject) {
    db.Property.find().cursor()
      .on('data', function(prop) {
        db.Amenities.find({
    'id': { $in: [1, 2, 3, 4, 5, 6, 7, 8, 9]}}, function(err, entries){
            var _ids = [];

            entries.forEach(function(entry) {_ids.push(entry._id)});
            console.log("_ids", _ids);
            prop.set({ amenitiesBasic: _ids});
            prop.save(function(err) {
            if (err) {
              reject(err);
            }
            resolve(true);
            });
        });

        db.Amenities.find({
    'id': { $in: [12, 13, 14, 22, 23]}}, function(err, entries){
            var _ids = [];

            entries.forEach(function(entry) {_ids.push(entry._id)});
            console.log("_ids", _ids);
            prop.set({ amenitiesFacilities: _ids});
            prop.save(function(err) {
            if (err) {
              reject(err);
            }
            resolve(true);
            });
        });

            db.Amenities.find({'id': { $in: [15, 16, 17, 18, 19]}}, function(err, entries){
            var _ids = [];

            entries.forEach(function(entry) {_ids.push(entry._id)});
            console.log("_ids", _ids);
            prop.set({ amenitiesKitchen: _ids});
            prop.save(function(err) {
            if (err) {
              reject(err);
            }
            resolve(true);
            });
        });
        // db.Amenities.findOne({ id: 2 }, function(err, entry){

        //   prop.amenitiesBasic.set(entry._id);
        // });
        //   db.Amenities.findOne({ id: 3 }, function(err, entry){
        //   prop.amenitiesBasic.push(entry);
        // });
        // db.Amenities.findOne({ id: 4 }, function(err, entry){
        //   prop.amenitiesBasic.push(entry);
        // });
        // db.Amenities.findOne({ id: 16 }, function(err, entry){
        //   if (err)

        //   prop.amenitiesKitchen.push(entry);
        // });
        // db.Amenities.findOne({ id: 17 }, function(err, entry){
        //   prop.amenitiesKitchen.push(entry);
        // });
        //  db.Amenities.findOne({ id: 18 }, function(err, entry){
        //   prop.amenitiesKitchen.push(entry);
        // });
        //   db.Amenities.findOne({ id: 19 }, function(err, entry){
        //   prop.amenitiesKitchen.push(entry);
        // });
        //   db.Amenities.findOne({ id: 20 }, function(err, entry){
        //   prop.amenitiesKitchen.push(entry);
        // });

        //  = [mongoose.Types.ObjectId('1'), mongoose.Types.ObjectId('2'), mongoose.Types.ObjectId('3'), mongoose.Types.ObjectId('4'), mongoose.Types.ObjectId('6'), mongoose.Types.ObjectId('9')];
        // prop.amenities.facilities = [mongoose.Types.ObjectId('12'), mongoose.Types.ObjectId('13')];
        // prop.amenities.kitchen = [mongoose.Types.ObjectId('15'), mongoose.Types.ObjectId('16'), mongoose.Types.ObjectId('17'), mongoose.Types.ObjectId('18'), mongoose.Types.ObjectId('19'), mongoose.Types.ObjectId('20'), mongoose.Types.ObjectId('21')];
        // prop.save(function(err){
        //   if(err)
        //     console.log("couldn't save amenities to prop ", prop.id);
        // });
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
   })
   .then(function(){
      saveAmenitiesToProperties()
    })
   // .then(function(){
   //    mongoose.disconnect()
   // })
  .catch(function(error) {
    return console.error(error);
  });

