import React, { useEffect, useState } from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Aux from '../../../hoc/Aux';
import ItemForm from '../../Components/ItemForm/ItemForm';
import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom';
import { findById } from "../../../services/ItemServices";
function ItemDetailsContainer() {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    console.log(id);
    useEffect(() => {
        console.log('use effect');
        findById(id).then((data) => {
            console.log('find by id', data)
            setProduct({data})
            
        })
    },[id]);
    console.log('product',product);
    return (
        <Aux>
            <Card>
                <Card.Body><ItemForm id={id} product={product} context='put'></ItemForm></Card.Body>
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