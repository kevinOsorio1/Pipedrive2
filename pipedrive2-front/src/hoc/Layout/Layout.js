import React, { render } from "react";
import ItemsContainer from "../../screens/Containers/ItemsContainer/ItemsContainer";
import Modal from "../../UI/Modal/Modal";
function Layout() {
    return (
        <div>
            <Modal use={console.log("post product")}>
                Crear nuevo Producto
            </Modal>
            <ItemsContainer />
        </div>
    );
}

export default Layout;
