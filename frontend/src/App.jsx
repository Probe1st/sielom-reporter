import { useState } from "react";
import "./assets/output.css";
import Header from "./components/Header";
import Router from "./features/routing/Router";

function App() {
  const [authorized, setAuthorized] = useState(true);

  return (
    <>
      <Header />
      <Router authorized={authorized} />
    </>
  );
}

export default App;
