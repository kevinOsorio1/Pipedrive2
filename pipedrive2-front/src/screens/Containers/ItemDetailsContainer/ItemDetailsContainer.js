import React, { useState } from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function ItemDetailsContainer(props) {
    const [product, setProduct] = useState(props.item);
    

    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="prices" title="Precios">
                <div>aqui va el componente precio </div> 
            </Tab>
            <Tab eventKey="variants" title="Variaciones">
                <div>aqui va el componente variacion</div>
            </Tab>

        </Tabs>
    )
}

export default ItemDetailsContainer;