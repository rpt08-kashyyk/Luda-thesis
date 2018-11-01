const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');
const propertiesRouter = require('./router.js');

const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.route('/api/properties')
  .get(function(req, result, next) {
    var properties = [];
    request({
      url: 'http://localhost:3001/properties',
      method: 'GET',
      qs: {
        limit: 100
      }
    }, function(err, res, body) {
      if (err) {
        console.error(err);
      } else {

        properties = JSON.parse(body);
        console.log("in request, properties:", properties);
        result.send(properties);
      }
    });
    });

app.listen(port, () => console.log(`Listening on port ${port}`));

// // create a GET route
// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });
