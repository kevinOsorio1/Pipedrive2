import logo from "./logo.svg";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
function App() {
    return (
        <div className="App">
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossOrigin="anonymous"
            />
            <Layout />
        </div>
    );
}

export default App;
