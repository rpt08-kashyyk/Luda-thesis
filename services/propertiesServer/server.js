require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const propDB = require('../../db/controllers/properties.js');

const app = express();
const port = process.env.PORT || 3001;

console.log("dirname: ", __dirname);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../dist')));

app.get('/properties', function(req, res){
  propDB.getProperties()
  .then(function(props){
    res.send(props);
  })
  .catch(function(err){
    res.status(400);
  })
});

//app.use('/bootstrap', express.static(__dirname + '/../node_modules/bootstrap/dist/css'));
//app.use('/scripts', express.static(__dirname + '/../node_modules'));

// app.use('/api/users', usersRouter);
// app.use('/api/itineraries', itinerariesRouter);



app.listen(port, () => console.log(`Server listening on port ${port}`));