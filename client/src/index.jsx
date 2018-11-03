import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import $ from 'jquery';
import examplePropertyData from '../dist/propertyData.js'

import FirebnbHeader from './components/header.jsx';
import Jumbo from './components/jumbo.jsx';
import Property from './components/property.jsx';
import PropertyDesc from './components/propertyDesc.jsx';
import Amenities from './components/amenities.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: [],
      properties: [],
      currentProperty: {},
      showDesc: false,
      showBtnLabel: "Read more about the space",
      showAmenitiesModal: false,
      hasData: false
    }

     this.getProperties = this.getProperties.bind(this);
     this.toggleDescDisplay = this.toggleDescDisplay.bind(this);
     this.getAmenities = this.getAmenities.bind(this);
     this.showAmenitiesModal = this.showAmenitiesModal.bind(this);
     this.handleAmenitiesShow = this.handleAmenitiesShow.bind(this);
     this.handleAmenitiesClose = this.handleAmenitiesClose.bind(this);
     this.setCurrentProperty = this.setCurrentProperty.bind(this);

     console.log("In constructor: ", this.state.properties);
     console.log("In constructor: data", examplePropertyData)

  }

  setCurrentProperty(index) {
    console.log("in: setCurrentProperty");
    this.setState({ currentProperty: this.state.properties[index] } );
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
    //console.log("in get properties");
    let serverRoute = '/api/properties';
    $.get(serverRoute, data => {
      //console.log("Get properties data: ", data)
      this.setState({
        properties: data,
        currentProperty: data[0],
        hasData: true
      }, function(){/*console.log("from settingState, currentState :", this.state)*/});
    });
  }

   getAmenities() {
    //console.log("in get amenities");
    let serverRoute = '/api/amenitites';
    $.get(serverRoute, data => {
      //console.log("Amenitiesdata: ", data)
      this.setState({
        amenitites: data
      }, function(){/*console.log ("from settingState, currentAmenities :", this.state)*/});
    });
  }

  updateCurrentProperty(index){
    this.setState({
        currentProperty: this.state.properties[index]
      });
  }

  componentDidMount(){
    this.getProperties();
    console.log("From did mount, state: ", this.state);
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

      if (!this.state.hasData)

        return (
          <div>
           <p>Loading..</p>
          </div>

        )
      return (
        <div>
            <FirebnbHeader properties={this.state.properties} setCurrentProperty={this.setCurrentProperty}/>
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


   // return (
   //    <div>
   //      <Header properties={this.state.properties}/>
   //      <Jumbo currentProp={this.state.currentProperty} />
   //      <Property property={this.state.currentProperty}/>
   //      <Grid>
   //        <Row className="show-grid">
   //          <Col md={7}>
   //            {this.state.showDesc && <PropertyDesc currentProperty={this.state.currentProperty} />}
   //            <Button bsSize="large" onClick = {this.toggleDescDisplay} style={buttonStyle}>{this.state.showBtnLabel}</Button>
   //          </Col>
   //        </Row>
   //        <Row className="show-grid">
   //          <Col md={7}>
   //            <Button bsSize="large" style={buttonStyle}>Contact Host</Button>
   //          </Col>
   //        </Row>
   //        <Row>
   //          <Col md={7}>
   //            <Amenities currentProp={this.state.currentProperty}/>
   //            <Button bsSize="large" onClick = {this.showAmenitiesModal} style={buttonStyle}>Show all amenities</Button>
   //          </Col>
   //        </Row>
   //      </Grid>
   //    </div>

   //  )