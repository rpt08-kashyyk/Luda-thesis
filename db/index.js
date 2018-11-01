var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('dotenv').config();

var uri = process.env.MONGODB_URI || 'mongodb://localhost/firebnb';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect(uri);

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
  id: {type: Number, required: true},
  name:  {type: String, required: true},
  desc:  {type: String, required: true},
  additional: String,
  type: {type: String, required: true}
});

var Amenities = mongoose.model('Amenities', amenitiesSchema);

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
  amenitiesBasic: [{type: Schema.Types.ObjectId, ref: 'Amenities'}],
  amenitiesFacilities: [{type: Schema.Types.ObjectId, ref: 'Amenities'}],
  amenitiesDining: [{type: Schema.Types.ObjectId, ref: 'Amenities'}],
  amenitiesKitchen: [{type: Schema.Types.ObjectId, ref: 'Amenities'}],

  images: [{
    link: {type: String, required: true}
  }]
});

var Property  = mongoose.model('Property', propertySchema);
var Host = mongoose.model('Host', hostSchema);
var Calendar = mongoose.model('Calendar', calendarSchema);


module.exports = {
  Property: Property,
  Amenities: Amenities,
  Calendar: Calendar,
};