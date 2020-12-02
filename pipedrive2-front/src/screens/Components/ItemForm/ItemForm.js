import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import ButtonContext from '../../../UI/Button/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { create, update} from "../../../services/ItemServices";
import CreateProduct from "./CreateProduct";
const DEFAULT_PRODUCT = {
    name: "",
    code: "",
    category_id: 0,
    unit: "",
};
function ItemForm(props) {
    const [validated, setValidated] = useState(false);
    const [product, setProduct] = useState(props.product ? props.product : DEFAULT_PRODUCT );
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            create(product);
        }

        setValidated(true);
    };
    const onClickHandler = () => {
        if(props.context==='create'){
            create(product);
        }else if(props.context==='put'){
            update(props.id,product);
        }
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
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="7" controlId="name">
                        <Form.Label>Nombre de Producto</Form.Label>
                        <Form.Control
                            name="name"
                            defaultValue={product.name}
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
                        defaultValue={product.code}
                            name="code"
                            type="text"
                            placeholder="Codigo del Producto"
                            onChange={handleChange}
                        />
                        <FormControl.Feedback>Correcto</FormControl.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="7" controlId="category_id">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            name="category_id"
                            as="select"
                        >
                            <option>1</option>
                            <option>2</option>
                        </Form.Control>
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
                        defaultValue={product.unit}
                            name="unit"
                            type="text"
                            placeholder="Unidad"
                        />
                        <FormControl.Feedback>Correcto</FormControl.Feedback>
                    </Form.Group>
                    
                </Form.Row>
                <Form.Group></Form.Group>
                <ButtonContext type="button" clicked={onClickHandler}>Create</ButtonContext>
            </Form>
        </div>
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
