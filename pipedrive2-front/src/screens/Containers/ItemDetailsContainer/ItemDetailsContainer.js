import React, { useEffect, useState } from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Aux from '../../../hoc/Aux';

import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom';
import { findById } from "../../../services/ItemServices";
function ItemDetailsContainer(props) {
    const [product, setProduct] = useState(props.item);
    let {id} = useParams();

    useEffect(() => {
        findById(parseInt(id)).then((data) => {
            console.log('find by id', data)
            setProduct(data)
        })
    });

    return (
        <Aux>
            <Card>
                <Card.Body>Aqui van los detalles del producto</Card.Body>
            </Card>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="prices" title="Precios">
                    <div>aqui va el componente precio </div>
                </Tab>
                <Tab eventKey="variants" title="Variaciones">
                    <div>aqui va el componente variacion</div>
                </Tab>
            </Tabs>
        </Aux>

    )
}

export default ItemDetailsContainer;