const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.route('/').get(function(req, res) {
    var properties = [];
  request({
    url: 'localhost:3001/properties',
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
      response.send(properties);
    }
  });
    res.json(properties);
  });