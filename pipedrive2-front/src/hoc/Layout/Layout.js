import React from "react";
import Products from "../../screens/Containers/Products/Products";
function Layout() {
    const { formVisible, setFormVisible } = useState(0);

    const createItemHandler = () => {
        if (formVisible) {
        }
    };
    return (
        <div>
            <Products />
        </div>
    );
}
export default Layout;
