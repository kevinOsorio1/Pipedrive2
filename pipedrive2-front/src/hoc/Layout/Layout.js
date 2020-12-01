import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";
import Modal from "../../UI/Modal/Modal";

import ItemsContainer from "../../screens/Containers/ItemsContainer/ItemsContainer";

import Aux from "../../hoc/Aux";
import ItemForm from "../../screens/Components/ItemForm/ItemForm";
function Layout() {
    return (
        <div className="container mt-5">
            <Router>
                <div className="container">
                    <div className="btn-group mb-5">
                        <Link to="/" className="btn btn-dark">
                            Productos
                        </Link>
                        <NavLink
                            to="/producto"
                            className="btn btn-dark"
                            activeClassName="active"
                        >
                            Producto detalle
                        </NavLink>
                    </div>

                    <Switch>
                        <Route path="/" exact>
                            <ItemsContainer />
                        </Route>

                        <Route path="/producto/:id">
                            aqui va el detalle producto
                        </Route>
                    </Switch>

                    <Modal
                        use={console.log("post product")}
                        title="Crear nuevo producto"
                    >
                        <ItemForm />
                    </Modal>
                </div>
            </Router>
        </div>
    );
}

export default Layout;
