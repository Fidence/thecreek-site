import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Train from "../Train/Train";
import "../Modal/modal.scss";

function ModalPage({ handleClick, show }) {
  return (
    <Modal className="modal" size="lg" show={show}>
      <Modal.Header className="header" closeButton>
        <Modal.Title className="title">
          ICT & Digital Literacy Training
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="body">
        <Train handleClick={handleClick} />
      </Modal.Body>
    </Modal>
  );
}

export default ModalPage;
