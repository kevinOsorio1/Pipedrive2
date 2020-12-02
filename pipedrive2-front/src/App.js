import "./App.css";
import Layout from "./hoc/Layout/Layout";
import AppRouter from './hoc/AppRouter/AppRouter';
function App() {
    return (
        <AppRouter>
            <Layout />
        </AppRouter>
    );
}

export default App;
