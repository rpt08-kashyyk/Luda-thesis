class AmenitiesModal extends React.Component {
  constructor(props, context) {
    super(props, context);



  render() {

    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Amenities</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Basic</h3>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AmenitiesModal;