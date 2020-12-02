import React, { useEffect, useState } from "react";
import ItemList from "../../Components/ItemList/ItemList";
import { findAll } from "../../../services/ItemServices";
import Aux from "../../../hoc/Aux";
import Modal from "../../../UI/Modal/Modal";
import ItemForm from "../../../screens/Components/ItemForm/ItemForm";

//Contenedor de Pagina de Ver Items + Crear Items
const Items = (props) => {
    const [data, setData] = useState();
    const [headers, setHeaders] = useState();
    useEffect(() => {
        findAll().then(loadedItems => {
            console.log('loadeditems to state' ,loadedItems);
            setData([...loadedItems]);
            
        }).catch(err => console.error(err));

    }, []);
    console.log('data',data);
    return (
        <div>
            <Modal
                use={console.log("post product")}
                title="Crear nuevo producto"
            >
                <ItemForm context='create' show={true} />
            </Modal>
            <ItemList data={data} />
        </div>
            
        
    );
};

export default Items;

/**
 * {

 */
