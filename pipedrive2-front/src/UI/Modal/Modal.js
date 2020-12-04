import React from "react";
import backdropClasses from "../Backdrop/Backdrop.css";
import Modal from "react-bootstrap/Modal";
import ButtonContext from "../Button/Button";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function ModalContext(props) {
    const [show, setShow] = useState(props.show);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button onClick={handleShow}> Create a product</Button>
            <Modal
                backdrop
                backdropClassName={backdropClasses.Backdrop}
                centered={true}
                autoFocus={true}
                show={props.show !== true ? show : props.show}
                onHide={handleClose}
                style={{
                    transform: show
                        ? "translateY(0)"
                        : "translateY(-100vh)",
                    opacity: show ? "1" : "0",
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.children}</Modal.Body>
                <Modal.Footer>

                    <ButtonContext type="secondary" clicked={handleClose}>
                        Close
                        </ButtonContext>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalContext;