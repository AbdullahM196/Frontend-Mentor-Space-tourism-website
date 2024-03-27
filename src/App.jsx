import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Outlet, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  const backgroundImage =
    location.pathname === "/"
      ? "homeImg"
      : location.pathname === "/destination"
      ? "destinationImg"
      : location.pathname === "/crew"
      ? "crewImg"
      : "technologyImg";
  return (
    <main className={`app ${backgroundImage}`}>
      <header className="header">
        <NavBar />
      </header>
      <div className="content">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
