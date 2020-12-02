import React, { useEffect, useState } from "react";
import ItemList from "../../Components/ItemList/ItemList";
import {findAll} from '../../../services/ItemServices';
import Aux from "../../../hoc/Aux";
import Modal from "../../../UI/Modal/Modal";
import ItemForm from "../../../screens/Components/ItemForm/ItemForm";

//Contenedor de Pagina de Ver Items + Crear Items
const Items = (props) => {
    let [data, setData] = useState();
    let [headers,setHeaders] = useState();
    useEffect(() => {
        const loadedItems = findAll();
        setData(loadedItems);
    }, []);

    return (
        <Aux>
            <Modal
                use={console.log("post product")}
                title="Crear nuevo producto"
            >
                <ItemForm show={true} />
            </Modal>
            <ItemList data={data} />
        </Aux>
    );
};

export default Items;

/**
 * {
                
 */
