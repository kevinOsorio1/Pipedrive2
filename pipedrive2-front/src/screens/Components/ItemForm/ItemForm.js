import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import { create, update } from "../../../services/ItemServices";

const DEFAULT_PRODUCT = {
    name: "",
    code: "",
    unit: "",
    tax: 0
};
function ItemForm(props) {
    const [validated, setValidated] = useState(false);
    const [product, setProduct] = useState(props.product !== null ? props.product : DEFAULT_PRODUCT);
    console.log('initial product form', product);
    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (props.context === 'Crear') {
            console.log('send: ', product)
            await create(
                product
            ).then(data => console.log('data on item form after create: ', data));
            //props.onAddProduct(product);
        } else if (props.context === 'Actualizar') {
            const up = update(product.id, product);
            console.log('update', up)
        }

        setValidated(true);
    };
    const clickhandler = async () => {
        console.log('send: ', product);
        await create(
            product
        ).then(data => props.showed(false));

        //props.onAddProduct(product);
    }
    const handleChange = (ev) => {
        const { value, name } = ev.target;

        setProduct((prevState) => {
            prevState[name] = value;
            console.log(prevState);
            return prevState;
        });
    };



    console.log(product);

    return (

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} md="7" controlId="name">
                    <Form.Label>Nombre de Producto</Form.Label>
                    <Form.Control
                        name="name"
                        defaultValue={product !== DEFAULT_PRODUCT ? product.name : DEFAULT_PRODUCT.name}
                        required
                        type="text"
                        placeholder="Nombre de Producto"
                        onChange={handleChange}
                    />
                    <FormControl.Feedback>Correcto</FormControl.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="7" controlId="code">
                    <Form.Label>Codigo del Producto</Form.Label>
                    <Form.Control
                        defaultValue={product !== DEFAULT_PRODUCT ? product.code : DEFAULT_PRODUCT.code}
                        name="code"
                        type="text"
                        placeholder="Codigo del Producto"
                        onChange={handleChange}
                    />
                    <FormControl.Feedback>Correcto</FormControl.Feedback>
                </Form.Group>

                <Form.Group
                    onChange={handleChange}
                    as={Col}
                    md="7"
                    controlId="unit"
                >
                    <Form.Label>Unidad</Form.Label>
                    <Form.Control
                        defaultValue={product !== DEFAULT_PRODUCT ? product.unit : DEFAULT_PRODUCT.unit}
                        name="unit"
                        type="text"
                        placeholder="Unidad"
                    />
                    <FormControl.Feedback>Correcto</FormControl.Feedback>
                </Form.Group>
                <Form.Group
                    onChange={handleChange}
                    as={Col}
                    md="7"
                    controlId="tax"
                >
                    <Form.Label>Impuesto</Form.Label>
                    <Form.Control
                        defaultValue={product !== DEFAULT_PRODUCT ? product.unit : DEFAULT_PRODUCT.unit}
                        name="tax"
                        type="text"
                        placeholder="Impusto"
                    />
                    <FormControl.Feedback>Correcto</FormControl.Feedback>
                </Form.Group>

            </Form.Row>
            <Form.Group><Button variant="primary" onClick={clickhandler}>
                {props.context}
            </Button></Form.Group>
        </Form>

    );
}
export default ItemForm;

/**
 * <Form.Group
                            onChange={priceHandleChange}
                            as={Col}
                            md="5"
                            controlId="price"
                        >
                            <Form.Label>Precio Unitario</Form.Label>
                            <Form.Control
                                defaultValue={product.price}
                                name="price"
                                required
                                type="text"
                                placeholder="Precio Unitario"
                            />
                            <FormControl.Feedback>
                                Correcto
                            </FormControl.Feedback>
                        </Form.Group>
                        <Form.Group
                            onChange={priceHandleChange}
                            as={Col}
                            md="5"
                            controlId="currency"
                        >
                            <Form.Label>Moneda</Form.Label>
                            <Form.Control
                                defaultValue={product.currency}
                                name="currency"
                                as="select"
                            >
                                <option>usd</option>
                                <option>clp</option>
                                <option>bol</option>
                            </Form.Control>
                            <FormControl.Feedback>
                                Correcto
                            </FormControl.Feedback>
                        </Form.Group>
                        <Form.Group
                        onChange={handleChange}
                        as={Col}
                        md="7"
                        controlId="tax"
                    >
                        <Form.Label>Impuesto</Form.Label>
                        <Form.Control
                            defaultValue={product.tax}
                            name="tax"
                            required
                            type="number"
                            placeholder="Impuesto"
                        />
                        <FormControl.Feedback>Correcto</FormControl.Feedback>
                    </Form.Group>
 */
