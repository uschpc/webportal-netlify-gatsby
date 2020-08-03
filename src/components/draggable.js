import React from "react";
import Draggable from "react-draggable";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import IframeSlider from "./iframe-slider";
import { useEffect } from "react";



export default class PopUp extends React.Component {
  state = {
    showModal: false
  };

  modalClose = () => {
    this.setState({
      modalShow: false
    });
  };

  componentWillReceiveProps(nextProps) {
    for (const index in nextProps) {
      if (nextProps[index] !== this.props[index]) {
        this.setState({
            showModal: true
          });
      }
    }
  }

  render() {
    return ( 
        <Draggable>
                <Modal
                    isOpen={this.state.showModal}
                    toggle={() => {
                    this.setState({ showModal: false });
                    this.modalClose();
                    }}
                    style={{
                    minWidth: "700px",
                    }}
                >
                <ModalHeader
                className="modal-header bg-primary modal-title text-white"
                toggle={() => {
                    this.setState({ showModal: false });
                    this.modalClose();
                }}
                >
                </ModalHeader>
                <ModalBody style={{
                    border:"0.1rem solid red"
                }}>
                <div className="form-group row" style={{
                    overflow: "auto",
                    }}>
                    <div className="FormRow col-sm-12">
                        <IframeSlider />
                    </div>
                </div>
                </ModalBody>
            </Modal>
        </Draggable>
    );
  }
}
