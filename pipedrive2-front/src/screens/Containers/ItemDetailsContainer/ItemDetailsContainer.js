import React, { useState } from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function ItemDetailsContainer(props) {
    const [product, setProduct] = useState(props.item);
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
                <div>algo</div>
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <div>algo</div>            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                <div>algo</div>            </Tab>
        </Tabs>
    )
}

export default ItemDetailsContainer;