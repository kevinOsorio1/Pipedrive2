import React from "react";
import { useEffect } from "react";
import { create } from "../../../services/ItemServices";
function CreateProduct(props) {
    useEffect(() => {
        const itemJson = JSON.stringify(props.item);
        console.log(props.item);
        create(itemJson).then((res) => console.log(res));
        // POST request using axios inside useEffect React hook
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    return <div></div>;
}

export default CreateProduct;
