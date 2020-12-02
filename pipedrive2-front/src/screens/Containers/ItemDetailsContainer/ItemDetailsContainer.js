import React, { useState } from "react";
import Tabs from 'react-bootstrap/Tabs'

function ItemDetailsContainer(props) {
    const [product, setProduct] = useState(props.item);
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
            <Sonnet />
        </Tab>
        <Tab eventKey="profile" title="Profile">
            <Sonnet />
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
            <Sonnet />
        </Tab>
        </Tabs>
    )
}

export default ItemDetailsContainer;