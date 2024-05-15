import "./assets/output.css";
import Header from "./components/ui/header/Header";
import Router from "./features/routing/Router";

function App() {
    const authorized = true;

    return (
        <>
            <Header />
            <Router authorized={authorized} /> 
        </>
    );
}

export default App;
