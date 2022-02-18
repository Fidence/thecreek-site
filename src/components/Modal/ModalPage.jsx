import React from "react";
import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
import Train from "../Train/Train";

function ModalPage({ handleClick, show }) {
  return (
    <Modal show={show} onHide={handleClick}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Train/>
      </Modal.Body>

    </Modal>
  );
}

export default ModalPage;
