import React from "react";


import Modal from "../../UI/Modal/Modal";

import ItemsContainer from "../../screens/Containers/ItemsContainer/ItemsContainer";

import Aux from "../../hoc/Aux";
import ItemForm from "../../screens/Components/ItemForm/ItemForm";
import ItemDetailsContainer from "../../screens/Containers/ItemDetailsContainer/ItemDetailsContainer";
function Layout() {
    return (
        <Aux>
<<<<<<< HEAD
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
=======
            
>>>>>>> 8f52f5b0340b1c96a7ae2f5914c2e5fd75895343
        </Aux>
    );
}

export default Layout;
