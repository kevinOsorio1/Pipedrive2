import React, { render } from "react";
import ItemsContainer from "../../screens/Containers/ItemsContainer/ItemsContainer";

import Aux from "../../hoc/Aux";
function Layout() {
    return (
        <Aux>
            <ItemsContainer />
        </Aux>
    );
}

export default Layout;
