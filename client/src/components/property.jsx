import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import{ FormGroup, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import Bootstrap from 'bootstrap';

class Property extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
      <Grid>
        <Row className="show-grid">
          <Col md={7}>
            <h3>
              <strong>ENTIRE HOUSE</strong>
            </h3>
            <div>
              <h1 style={{ padding: 0, marginBottom: 20, width: 600}}>
                {this.props.property.shortDesc}
              </h1>
            </div>
            <div>
              <h3 style={{ padding: 0, marginBottom: 20, width: 600}}>
                {this.props.property.address.city}
              </h3>
            </div>
            <div style={{ padding: 5, marginBottom: 20, width: 600}}>
              <Row className="show-grid">
                <Col md={2}>
                  <p>
                    {this.props.property.guests} guests
                  </p>
               </Col>
               <Col md={3}>
                  <p>
                    {this.props.property.bedrooms} bedrooms
                  </p>
               </Col>
               <Col md={2}>
                  <p>
                    {this.props.property.beds} beds
                  </p>
               </Col>
               <Col md={2}>
                  <p>
                    {this.props.property.beds} baths
                  </p>
               </Col>
              </Row>
            </div>
            <p className="prop-desc">
              {this.props.property.desc1}
            </p>
          </Col>
          <Col md={5}>
            Placeholder for Calendar
          </Col>
        </Row>
      </Grid>
      )
  }
}

// Property.propTypes = {
//   property: React.PropTypes.object.isRequired
// };


export default Property;

// <Panel id="collapsible-panel-example-2" defaultCollapsed>
//                <Panel.Heading>
//                  <Panel.Title toggle>
//                    Read more
//                  </Panel.Title>
//                </Panel.Heading>
//                <Panel.Collapse>
//                  <Panel.Body>
//                    Anim pariatur cliche reprehenderit, enim eiusmod high life
//                    accusamus terry richardson ad squid. Nihil anim keffiyeh
//                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
//                    ea proident.
//                  </Panel.Body>
//                </Panel.Collapse>
//               </Panel>

