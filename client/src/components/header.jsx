import React from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import { FormGroup, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import {DropdownButton, MenuItem, NavDropdown, Input }  from 'react-bootstrap';
import Bootstrap from 'bootstrap';

class FirebnbHeader extends React.Component {

  constructor(props) {
    super(props);
    this.onDropdownSelected = this.onDropdownSelected.bind(this);
    this.fillDropdownOptions = this.fillDropdownOptions.bind(this);
    console.log("header constructor / props: ", this.props);
    this.items = this.fillDropdownOptions();
  }

  onDropdownSelected(e) {
    this.props.setCurrentProperty(e);
  }

  fillDropdownOptions() {
    let items = [];
    for (let i = 0; i < this.props.properties.length; i++) {
      items.push( <MenuItem eventKey={i} key={i}>{i}-{this.props.properties[i].shortDesc}</MenuItem>);
    }

     // let menuItems = this.props.properties.map((property, index) => {
     //           <MenuItem eventKey={index} value={property.shortDesc}>{index}-{property.shortDesc}</MenuItem>
     //          }
     //  );

    console.log("menuItems", items);
    return items;
  }

  render() {
      let properties = this.props.properties;
      // let menuItems = properties.map((property, index) => {
      //          <MenuItem eventKey={index} value={property.shortDesc}>{index}-{property.shortDesc}</MenuItem>
      //         }
      // );
      // console.log("menuItems", menuItems);


      return (
        <Navbar inverse fixedTop fluid={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"></a>Firebnb
              <img
                src="/AirbnbLogo.jpg"
                width="30"
                height="30"
                className="d-inline-block"
                alt="Airbnb logo"
              />
            </Navbar.Brand>
          </Navbar.Header>

         <Nav pullRight >
            <NavDropdown
                key={1}
                id={`dropdown-basic-${0}`}
                title="Select Firebnb property"
                margine={20}
                onSelect={this.onDropdownSelected}
               >
               {this.items}
            </NavDropdown>
            <NavItem eventKey={1} href="#">
              Become a Host
            </NavItem>
            <NavItem eventKey={2} href="#">
              Saved
            </NavItem>
            <NavItem eventKey={3} href="#">
              Trips
            </NavItem>
            <NavItem eventKey={4} href="#">
              Messages
            </NavItem>
            <NavItem eventKey={5} href="#">
              Help
            </NavItem>
          </Nav>

        </Navbar>
    );
  }
}

export default FirebnbHeader;

// <MenuItem eventKey={0}>0-{this.props.properties[0].shortDesc}</MenuItem>
//             <MenuItem eventKey={1}>0-{this.props.properties[1].shortDesc}</MenuItem>
//             <MenuItem eventKey={2}>0-{this.props.properties[2].shortDesc}</MenuItem>
//             <MenuItem eventKey={3}>0-{this.props.properties[3].shortDesc}</MenuItem>

// <Form inline>
//      <FormControl type="text" glyph="search" bsSize="large" placeholder="Search" />
//      <FormControl.Feedback>
//      <Glyphicon glyph="star" />
//      </FormControl.Feedback>
//   </Form>


 // <Button bsSize="large" disabled>
 //           <Glyphicon glyph="search" />
 //           Search
 //          </Button>