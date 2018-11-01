import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import{ FormGroup, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import Bootstrap from 'bootstrap';

class PropertyDesc extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div>
          <h3>The space</h3>
          <p className="prop-desc"> {this.props.currentProperty.desc2} </p>
        </div>
      )
  }
}

export default PropertyDesc;