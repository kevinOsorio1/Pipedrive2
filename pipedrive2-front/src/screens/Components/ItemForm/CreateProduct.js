import React from "react";
import { useEffect } from "react";
import ItemService from "../../../services/ItemServices";
function CreateProduct(props) {
    useEffect((props) => {
        // POST request using axios inside useEffect React hook
        const itemJson = JSON.stringify(props.item);
        console.log(props.item);
        ItemService.create(itemJson);

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    return <div></div>;
}

export default CreateProduct;
