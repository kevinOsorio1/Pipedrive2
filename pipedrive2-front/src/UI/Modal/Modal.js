import React, { render } from "react";

import Modal from "react-bootstrap/Modal";
import ButtonContext from "../Button/Button";
import { useState } from "react";

function ModalContext(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <ButtonContext type="primary" clicked={handleShow}>
                Crear Nuevo Producto
            </ButtonContext>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.children}</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <ButtonContext type="secondary" clicked={handleClose}>
                        Close
                    </ButtonContext>
                    <ButtonContext type="primary" clicked={props.use}>
                        Create
                    </ButtonContext>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalContext;
