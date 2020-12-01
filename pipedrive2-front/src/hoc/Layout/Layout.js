import React, { render } from "react";
import ItemsContainer from "../../screens/Containers/ItemsContainer/ItemsContainer";
import Modal from "../../UI/Modal/Modal";
import ItemForm from "../../screens/Components/ItemForm/ItemForm";
function Layout() {
    return (
        <div>
            <Modal
                use={console.log("post product")}
                title="Crear nuevo producto"
            >
                <ItemForm />
            </Modal>
            <ItemsContainer />
        </div>
    );
}

export default Layout;
