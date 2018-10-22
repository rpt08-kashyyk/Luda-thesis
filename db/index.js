var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('dotenv').config();

console.log(",env", process.env.MONGODB_URI);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect(process.env.MONGODB_URI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose connected!');
});


var hostSchema = new Schema (
{
  _id: {type: Number, required: true},
  name: {
    first: String,
    last: String
  }
});


var calendarSchema = new Schema (
{
  property: { type: Schema.Types.ObjectId, ref: 'Property'},
  occupied: {
    startDate: {type: Date, default: Date.now},
    endDate: {type: Date, default: Date.now},
    guest: String,
    totalPrice: Number
  }
}
);



var amenitiesSchema = new Schema (
{
  //id: {type: Number, required: true},
  name:  {type: String, required: true},
  desc:  {type: String, required: true},
  additional: String,
  type: {type: String, required: true}
});

var propertySchema = new Schema (
{
  id: {type: Number, required: true},
  desc1: {type: String, required: true},
  desc2: {type: String, required: true},
  shortDesc: {type: String, required: true},
  address: {
    street: String,
    city: String,
    country: String
  },
  guests: {type: Number, required: true},
  beds: {type: Number, required: true},
  bedrooms: {type: Number, required: true},
  baths: {type: Number, required: true},
 // calendar: { type: Schema.Types.ObjectId, ref: 'Calendar'},
  amenities: [{
    basic: [{
      amenity_id: {type: Schema.Types.ObjectId, ref: 'Amenities'}
    }],
    facilities: [{
      amenity_id: {type: Schema.Types.ObjectId, ref: 'Amenities'}
    }],
    dining: [{
      amenity_id: {type: Schema.Types.ObjectId, ref: 'Amenities'}
    }]
  }],
  images: [{
    link: {type: String, required: true}
  }]
});

var Property  = mongoose.model('Property', propertySchema);
var Host = mongoose.model('Host', hostSchema);
var Calendar = mongoose.model('Calendar', calendarSchema);
var Amenities = mongoose.model('Amenities', amenitiesSchema);

module.exports = {
  Property: Property,
  Amenities: Amenities,
  Calendar: Calendar,
};