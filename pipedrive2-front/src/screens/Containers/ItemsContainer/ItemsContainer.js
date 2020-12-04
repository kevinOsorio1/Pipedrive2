import React, { useEffect, useState } from "react";
import ItemList from "../../Components/ItemList/ItemList";
import { findAllItems } from "../../../services/ItemServices";
import { findAllFields } from "../../../services/ItemFieldService";

import Modal from "../../../UI/Modal/Modal";
import ItemForm from "../../../screens/Components/ItemForm/ItemForm";
import { ItemFieldService } from "../../../services/ItemFieldService";
//Contenedor de Pagina de Ver Items + Crear Items
const ItemsContainer = (props) => {
    const [data, setData] = useState([]);
    const [fields, setFields] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const loadedData = await findAllItems().then(data => data);

            if (loadedData !== data.prevState) {
                setData(loadedData);
            }
            const loadedFields = await findAllFields();

            if (loadedFields !== fields.prevState) {
                setFields(loadedFields);
            }
            console.log('loadedfields on intemcontainer', loadedFields);
            console.log('in itemcontainer product: ', loadedData);
        } fetchData();
    }, []);
    function onShowModal(beShowed) {
        setShowModal(beShowed);
    }
    const addProductHandler = (item) => {
        setData((prevState) => [
            ...prevState, { ...item }
        ]);
    }

    console.log('data', data);
    return (
        <div>
            <Modal
                show={showModal}
                use={console.log("post product")}
                title="Crear nuevo producto"
            >
                <ItemForm showed={onShowModal} context='Crear' product={null} onAddProduct={addProductHandler} show={true} />
            </Modal>
            <ItemList products={data} fields={fields} />
        </div>


    );
};

export default ItemsContainer;

/**
 * {

 */
