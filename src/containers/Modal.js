import React, {Component} from "react";
import {Button, ButtonToolbar, Modal} from 'react-bootstrap';

export default class MyLargeModal extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Photography portfolio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src="chrome.png" width="100%"></img>
                    <div className="reduced">
                    <h4>About this one</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                        auctor.
                    </p>
                    <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                        cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                        dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                        auctor.
                    </p>
                    <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                        cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                        dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                        auctor.
                    </p>
                    <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                        cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                        dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar className = "pull-right">
                        <a target="_blank" href="https://stephsphotos.tumblr.com"><Button bsStyle = "primary">
                            Demo
                        </Button></a>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </ButtonToolbar>
                </Modal.Footer>
            </Modal>
        );
    }
}