import React, { render } from "react";
import classes from "./Modal.css";
import backdropClasses from "../Backdrop/Backdrop.css";
import Modal from "react-bootstrap/Modal";
import ButtonContext from "../Button/Button";
import { useState } from "react";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../hoc/Aux";
function ModalContext(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Aux>
            <ButtonContext type="primary" clicked={handleShow}>
                Crear Nuevo Producto
            </ButtonContext>
            <Backdrop show={props.show} clicked={handleClose} />
            <Modal
                backdropClassName={backdropClasses.Backdrop}
                show={show}
                onHide={handleClose}
                style={{
                    transform: show ? "translateY(0)" : "translateY(-100vh)",
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
                    <ButtonContext type="primary" clicked={props.use}>
                        Create
                    </ButtonContext>
                </Modal.Footer>
            </Modal>
        </Aux>
    );
}

export default ModalContext;
