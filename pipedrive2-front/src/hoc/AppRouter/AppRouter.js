import React, { useState } from 'react'
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
    const [url, setUrl] = useState();

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
                            {<ItemsContainer />}
                        </Route>

                        <Route path="/producto/:id">
                            <ItemsDetailsContainer />
                        </Route>

                    </Switch>


                </div>
            </Router>
        </div>
    );
}
export default AppRouter;