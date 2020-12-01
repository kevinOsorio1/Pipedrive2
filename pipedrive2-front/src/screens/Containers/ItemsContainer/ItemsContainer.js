import React, { useEffect, useState } from "react";
import ItemList from "../../Components/ItemList/ItemList";
import Button from "react-bootstrap/Button";
import ItemService from "../../../services/ItemServices";

//Contenedor de Pagina de Ver Items + Crear Items
const Items = (props) => {
    let [data, setData] = useState();

    useEffect(() => {
        
        fetch(
            "https://api.pipedrive.com/v1/products?start=0&api_token=5e0c57f012b8c4af1fb8c084edd9171619140d53"
        )
            .then((response) => response.json())
            .then((responseData) => responseData.data)
            .then((res) => {
                const loadedItems = [];
                for (const key in res) {
                    loadedItems.push({
                        id: res[key].id,
                        name: res[key].name,
                        itemCode: res[key].code,
                    });
                    console.log(JSON.stringify(loadedItems));
                }
                setData(loadedItems);
            });
    }, []);

    return (
        <div>
            <Button variant="primary">Crear nuevo Producto</Button>{" "}
            <ItemList data={data} />
        </div>
    );
};

export default Items;

/**
 * {
                
 */
