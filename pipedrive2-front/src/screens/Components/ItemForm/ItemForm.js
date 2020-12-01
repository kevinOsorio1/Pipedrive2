import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ItemForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group md="4" controlId="validationCustom01">
                    <Form.Label>Nombre de Producto</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nombre de Producto"
                        defaultValue=""
                    />
                    <Form.Control.Feedback>Correcto</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom01">
                    <Form.Label>Codigo del Producto</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Codigo del Producto"
                        defaultValue=""
                    />
                    <Form.Control.Feedback>Correcto</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom01">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </Form.Control>
                    <Form.Control.Feedback>Correcto</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom01">
                    <Form.Label>Unidad</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre de Producto"
                        defaultValue=""
                    />
                    <Form.Control.Feedback>Correcto</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom01">
                    <Form.Label>Precio Unitario</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nombre de Producto"
                        defaultValue=""
                    />
                    <Form.Control.Feedback>Correcto</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom01">
                    <Form.Label>Moneda</Form.Label>
                    <Form.Control as="select">
                        <option>usd</option>
                        <option>clp</option>
                        <option>bol</option>
                    </Form.Control>
                    <Form.Control.Feedback>Correcto</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom01">
                    <Form.Label>Impuesto</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Nombre de Producto"
                        defaultValue=""
                    />
                    <Form.Control.Feedback>Correcto</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Group>
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                />
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
    );
}
export default ItemForm;
