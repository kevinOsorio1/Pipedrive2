import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Aux from '../../../hoc/Aux';
import ItemForm from '../../Components/ItemForm/ItemForm';
import Card from 'react-bootstrap/Card';
function ItemDetail(props) {
    
    return(<Aux>
        <Card>
            <Card.Body><ItemForm product={props.product} context='put'/></Card.Body>
        </Card>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="prices" title="Precios">
                <div>aqui va el componente precio </div>
            </Tab>
            <Tab eventKey="variants" title="Variaciones">
                <div>aqui va el componente variacion</div>
            </Tab>
        </Tabs>
    </Aux>);
}
export default ItemDetail;