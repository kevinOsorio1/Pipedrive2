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
import ItemDetailsContainer from "../../screens/Containers/ItemDetailsContainer/ItemDetailsContainer";
function Layout() {
    return (
        <Aux>
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
                            {<ItemsContainer />}
                        </Route>

                        <Route path="/producto">
                            <ItemDetailsContainer/>
                        </Route>
                    </Switch>

                    
                </div>
            </Router>
        </div>
        </Aux>
    );
}

export default Layout;
