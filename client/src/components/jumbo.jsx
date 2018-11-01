import React from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import{ FormGroup, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import Bootstrap from 'bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

var Jumbo = (props) => {


      const divStyle1 = {
        color: '#5b5b5b5',
        backgroundImage: 'url(' + props.currentProp.images[0].link  + ')'
      };

      const divStyle2 = {
        color: '#5b5b5b5',
        backgroundImage: 'url(' + (props.currentProp.images[1].link || props.currentProp.images[0].link) + ')'
      };

      const divStyle3 = {
        color: '#5b5b5b5',
        backgroundImage: 'url(' + (props.currentProp.images[2].link || props.currentProp.images[0].link) + ')'
      };

      const divStyle4 = {
        color: '#5b5b5b5',
        backgroundImage: 'url(' + (props.currentProp.images[3].link || props.currentProp.images[0].link) + ')'
      };

      const divStyle5 = {
        color: '#5b5b5b5',
        backgroundImage: 'url(' + (props.currentProp.images[4].link || props.currentProp.images[0].link) + ')'
      };
      // const divStyle2 = {
      //   color: '#5b5b5b5',
      //   backgroundImage: 'url(' + {props.images.images[1].link}  + ')'
      // };

      // const divStyle3 = {
      //   color: '#5b5b5b5',
      //   backgroundImage: 'url(' + {props.images.images[2].link} + ')'
      // };
      //  const divStyle4 = {
      //   color: '#5b5b5b5',
      //   backgroundImage: 'url(' + {props.images.images[3].link} + ')'
      // };

      // const divStyle5 = {
      //   color: '#5b5b5b5',
      //   backgroundImage: 'url(' + {props.images.images[4].link} + ')'
      // };

      return (
            <div className ="imagesWrapper">
              <div className="imageBox imageLarge" style={divStyle1}></div>
              <div className="imageBox imageSmall" style={divStyle2}></div>
              <div className="imageBox imageSmall" style={divStyle3}></div>
              <div className="imageBox imageSmall" style={divStyle4}></div>
              <div className="imageBox imageSmall" style={divStyle5}></div>

              <Button bsStyle="default" bsSize="large" className="jumbo-btn-save"><span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span> Save</Button>
              <Button bsStyle="default" bsSize="large" className="jumbo-btn-share"><span className="glyphicon glyphicon-share" aria-hidden="true"></span> Share</Button>
              <Button bsStyle="default" bsSize="large" className="jumbo-btn-photos">View Photos</Button>
            </div>
      )
}


export default Jumbo;


// <Jumbotron className ="images-wrapper">
//              <Row style={{ margin:0, padding: 2}}>
//                <Col md={6} style={{ padding: 2 }} responsive>
//                    <Image src={props.images.images[0].link} responsive />;
//                </Col>
//                <Col md={3} style={{ padding: 0, margin:0}} responsive>
//                    <Image src={props.images.images[1].link} responsive />;
//                </Col>
//                <Col md={3} style={{ padding: 2, margin:0}} responsive>
//                   <Image src={props.images.images[2].link} responsive />;
//                </Col>
//                <Col md={3} style={{ padding: 2, margin:0}} responsive>
//                   <Image src={props.images.images[3].link} responsive />;
//                </Col>
//                   <Col md={3} style={{ padding: 2, margin:0}} responsive>
//                   <Image src={props.images.images[4].link} responsive />;
//                </Col>
//              </Row>
//              <Button bsStyle="default" bsSize="large" className="jumbo-btn-save">Save</Button>
//              <Button bsStyle="default" bsSize="large" className="jumbo-btn-share">Share</Button>
//              <Button bsStyle="default" bsSize="large" className="jumbo-btn-photos">View Photos</Button>
//            </Jumbotron>


//<Image className="jumbo-img" href="#" alt="171x180" src={props.images.images[0].link} />
  //              </Col>
// <Grid>
 //             <Row>
  //              <Col xs={6} md={3}>
  //                <Image href="#" alt="171x180" src={props.images[0].link} />
  //              </Col>
  //              <Col xs={6} md={3}>
  //                <Image href="#" alt="171x180" src={props.images[1].link} />
  //              </Col>
  //              <Col xs={6} md={3}>
  //                <Image href="#" alt="171x180" src={props.images[1].link} />
  //              </Col>
  //            </Row>
  //          </Grid>



  // <div className="jumbotron bg-info">
  //         <h1 className="display-3">Hello, world!</h1>
  //         <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  //         <hr className="my-4" />
  //         <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  //         <p className="lead">
  //         <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  //         </p>
  //       </div>