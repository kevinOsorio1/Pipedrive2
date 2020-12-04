import React from 'react'
import ItemsDetailsContainer from '../../screens/Containers/ItemDetailsContainer/ItemDetailsContainer';
import ItemsContainer from '../../screens/Containers/ItemsContainer/ItemsContainer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";

function AppRouter(props) {


    return (
        <div className="container mt-5">
            <Router>
                <div className="container">
                    <div className="btn-group mb-5">
                        <Link to="/" className="btn btn-dark">
                            Productos
                        </Link>
                        <NavLink
                            to="/producto/:id"
                            className="btn btn-dark"
                            activeClassName="active"
                        >
                            Producto detalle
                        </NavLink>
                    </div>

                    <Switch>
                        <Route path="/product/:id">
                            <ItemsDetailsContainer />
                        </Route>
                        <Route path="/" exact>
                            <ItemsContainer />
                        </Route>



                    </Switch>


                </div>
            </Router>
        </div>
    );
}
export default AppRouter;