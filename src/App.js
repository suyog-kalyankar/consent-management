import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import { CONSENTS_URL, GIVE_CONSENT_URL } from "./constants/app-constants";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: GIVE_CONSENT_URL, element: <Home /> },
    { path: CONSENTS_URL, element: <Home /> }
  ]);
  return (
    <div className="App">
      <header className="App-header">
        {routes}
      </header>
    </div>
  );
}

export default App;
