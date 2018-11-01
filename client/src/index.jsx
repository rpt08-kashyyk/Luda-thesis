import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import $ from 'jquery';
import examplePropertyData from '../dist/propertyData.js'

import Header from './components/header.jsx';
import Jumbo from './components/jumbo.jsx';
import Property from './components/property.jsx';
import PropertyDesc from './components/propertyDesc.jsx';
import Amenities from './components/amenities.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: [],
      properties: [
  {
   "id": 1,
   "desc1": "This dog-friendly home comes with all the amenities you could want on a vacation! In the home, you will find a cozy gas fireplace, several books to read, and a spacious outdoor deck with ample seating and a gas grill. The complex also offers access to a pool, hot tub, tennis courts, marina and a playground for the kids (for an additional daily fee). \n",
   "desc2": "What's Nearby:\nGolfers can enjoy Tahoe Donner Golf Course, just 2 miles away. Also, a short distance away are Prosser Hill and Alder Hill, both sporting hiking trails for your enjoyment. Winter vacationers can drive about 13 miles in order to ski at Northstar California Resort.\nThings to Know:\nFree WiFi\nDogs 30lbs or less welcome for a fee\nFull kitchen\nGuests have access to the Tahoe Donner HOA amenities for a daily fee, which includes a rec center and marina.",
   "shortDesc": "NEW LISTING! Dog-friendly home w/ private dock and shared hot tub & pool!",
   "type": "house",
   "address": {
      "street": "NA",
      "city": "Truckee",
      "country": "US"
   },
   "guests": 6,
   "beds": 4,
   "bedrooms": 3,
   "baths": 2,
   "amenitiesBasic": ["Heater", "Airconditioning", "Smoke detector"],
    "amenitiesFacilities": ["Pool", "Deck", ""],
    "amenitiesDining": ["Grill"],
    "amenitiesKitchen": ["Refrigirator", "Microwave", "Grill"],
   "host": "",
   "images": [
      {
         "link": "https://s3-us-west-1.amazonaws.com/lsfirebnb/1/01.jpg"
      },
      {
         "link": "https://s3-us-west-1.amazonaws.com/lsfirebnb/1/02.jpg"
      },
      {
         "link": "https://s3-us-west-1.amazonaws.com/lsfirebnb/1/03.jpg"
      },
      {
         "link": "https://s3-us-west-1.amazonaws.com/lsfirebnb/1/04.jpg"
      },
      {
         "link": "https://s3-us-west-1.amazonaws.com/lsfirebnb/1/05.jpg"
      }
   ]
  }
],
      currentProperty: {
   "id": 1,
   "desc1": "This dog-friendly home comes with all the amenities you could want on a vacation! In the home, you will find a cozy gas fireplace, several books to read, and a spacious outdoor deck with ample seating and a gas grill. The complex also offers access to a pool, hot tub, tennis courts, marina and a playground for the kids (for an additional daily fee). \n",
   "desc2": "What's Nearby:\nGolfers can enjoy Tahoe Donner Golf Course, just 2 miles away. Also, a short distance away are Prosser Hill and Alder Hill, both sporting hiking trails for your enjoyment. Winter vacationers can drive about 13 miles in order to ski at Northstar California Resort.\nThings to Know:\nFree WiFi\nDogs 30lbs or less welcome for a fee\nFull kitchen\nGuests have access to the Tahoe Donner HOA amenities for a daily fee, which includes a rec center and marina.",
   "shortDesc": "NEW LISTING! Dog-friendly home w/ private dock and shared hot tub & pool!",
   "type": "house",
   "address": {
      "street": "NA",
      "city": "Truckee",
      "country": "US"
   },
   "guests": 6,
   "beds": 4,
   "bedrooms": 3,
   "baths": 2,
   "amenitiesBasic": ["Heater", "Air-conditioning", "Smoke detector", "Wifi", "Iron", "Kitchen", "Hot Tub"],
    "amenitiesFacilities": ["Pool", "Deck", "Free parking on premises"],
    "amenitiesDining": ["Grill"],
    "amenitiesKitchen": ["Refrigirator", "Microwave", "Grill"],
   "host": "",
   "images": [
      {
         "link": "https://s3-us-west-1.amazonaws.com/lsfirebnb/1/01.jpg"
      },
      {
         "link": "https://s3-us-west-1.amazonaws.com/lsfirebnb/1/02.jpg"
      },
      {
         "link": "https://s3-us-west-1.amazonaws.com/lsfirebnb/1/03.jpg"
      },
      {
         "link": "https://s3-us-west-1.amazonaws.com/lsfirebnb/1/04.jpg"
      },
      {
         "link": "https://s3-us-west-1.amazonaws.com/lsfirebnb/1/05.jpg"
      }
   ]
  },
      showDesc: false,
      showBtnLabel: "Read more about the space",
      showAmenitiesModal: false
    }

     this.getProperties = this.getProperties.bind(this);
     this.toggleDescDisplay = this.toggleDescDisplay.bind(this);
     this.getAmenities = this.getAmenities.bind(this);
     this.showAmenitiesModal = this.showAmenitiesModal.bind(this);
     this.handleAmenitiesShow = this.handleAmenitiesShow.bind(this);
     this.handleAmenitiesClose = this.handleAmenitiesClose.bind(this);

     console.log("In constructor: ", this.state.properties);
     console.log("In constructor: data", examplePropertyData)

  }

  showAmenitiesModal() {
    this.setState({ showAmenitiesModal: true });
  }

   handleAmenitiesClose() {
    this.setState({ showAmenitiesModal: false });
  }

  handleAmenitiesShow() {
    this.setState({ showAmenitiesModal: true });
  }

  toggleDescDisplay() {
    const show = this.state.showDesc;
    if (!show) {
      this.setState({showBtnLabel: "Hide"});
    }
    else {
      this.setState({showBtnLabel: "Read more about the space"});
    }
    this.setState({showDesc: !show});
  }

  getProperties() {
    console.log("in get properties");
    let serverRoute = '/api/properties';
    $.get(serverRoute, data => {
      console.log("data: ", data)
      this.setState({
        properties: data,
        currentProperty: data[0]
      }, function(){console.log("from settingState, currentState :", this.state)});
    });
  }

   getAmenities() {
    console.log("in get amenities");
    let serverRoute = '/api/amenitites';
    $.get(serverRoute, data => {
      console.log("Amenitiesdata: ", data)
      this.setState({
        amenitites: data
      }, function(){console.log ("from settingState, currentAmenities :", this.state)});
    });
  }

  ////
  // fetch("https://api.example.com/items")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result.items
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )

  ////

  updateCurrentProperty(index){
    this.setState({
        currentProperty: this.state.properties[index]
      });
  }

  componentWillMount(){
    this.getProperties();
  }

  // componentDidMount(){
  //     this.getProperties();
  //   console.log("mounted");

  // }

  render() {
     const buttonStyle = {

        border: 'none',
        color: 'teal',
        paddingBottom: 20,
        paddingLeft: 0,
        margine: 0,
        textAlign: 'left',
        className: 'infoBtn'
      };

      console.log("render: currentProperty", this.state.currentProperty)

    return (
      <div>
        <Header properties={this.state.properties}/>
        <Jumbo currentProp={this.state.currentProperty} />
        <Property property={this.state.currentProperty}/>
        <Grid>
          <Row className="show-grid">
            <Col md={7}>
              {this.state.showDesc && <PropertyDesc currentProperty={this.state.currentProperty} />}
              <Button bsSize="large" onClick = {this.toggleDescDisplay} style={buttonStyle}>{this.state.showBtnLabel}</Button>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={7}>
              <Button bsSize="large" style={buttonStyle}>Contact Host</Button>
            </Col>
          </Row>
          <Row>
            <Col md={7}>
              <Amenities currentProp={this.state.currentProperty}/>
              <Button bsSize="large" onClick = {this.showAmenitiesModal} style={buttonStyle}>Show all amenities</Button>
            </Col>
          </Row>
        </Grid>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));