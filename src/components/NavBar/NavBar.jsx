import "./nav.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function NavBar() {
  const [active, setActive] = useState("/");
  const location = useLocation();
  const navigate = useNavigate();
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const toggle = () => setToggleSideBar(!toggleSideBar);
  useEffect(() => {
    if (location.pathname === "/") {
      setActive("/");
    }
    if (location.pathname === "/destination") {
      setActive("/destination");
    }
    if (location.pathname === "/crew") {
      setActive("/crew");
    }
    if (location.pathname === "/technology") {
      setActive("/technology");
    }
  }, [location]);
  return (
    <>
      <nav className="nav">
        <div className="logo" onClick={() => navigate("/")}>
          <img src="./assets/shared/logo.svg" alt="Logo" />
        </div>
        <div className="line"></div>
        <ul>
          <li
            className={`navText navItems ${active === "/" && "active"}`}
            onClick={() => navigate("/")}
          >
            <span style={{ fontWeight: "bold", color: "white" }}>00</span> Home
          </li>
          <li
            className={`navText navItems ${
              active === "/destination" && "active"
            }`}
            onClick={() => navigate("/destination")}
          >
            <span style={{ fontWeight: "bold", color: "white" }}>01</span>{" "}
            Destination
          </li>
          <li
            className={`navText navItems ${active === "/crew" && "active"}`}
            onClick={() => navigate("/crew")}
          >
            <span style={{ fontWeight: "bold", color: "white" }}>02</span> Crew
          </li>
          <li
            className={`navText navItems ${
              active === "/technology" && "active"
            }`}
            onClick={() => navigate("/technology")}
          >
            <span style={{ fontWeight: "bold", color: "white" }}>03</span>{" "}
            Technology
          </li>
        </ul>

        {toggleSideBar ? (
          <img
            src="./cross.svg"
            alt="close menu"
            width={48}
            height={48}
            className="menu-icon"
            onClick={toggle}
          />
        ) : (
          <img
            src="./hamburger-menu.svg"
            alt="hamburger-menu"
            width={48}
            height={48}
            className="menu-icon"
            onClick={toggle}
          />
        )}
      </nav>
      {toggleSideBar && (
        <ul className="mobileMenu">
          <li
            className={`navText navItems ${active === "/" && "active"}`}
            onClick={() => navigate("/")}
          >
            <span style={{ fontWeight: "bold", color: "white" }}>00</span> Home
          </li>
          <li
            className={`navText navItems ${
              active === "/destination" && "active"
            }`}
            onClick={() => navigate("/destination")}
          >
            <span style={{ fontWeight: "bold", color: "white" }}>01</span>{" "}
            Destination
          </li>
          <li
            className={`navText navItems ${active === "/crew" && "active"}`}
            onClick={() => navigate("/crew")}
          >
            <span style={{ fontWeight: "bold", color: "white" }}>02</span> Crew
          </li>
          <li
            className={`navText navItems ${
              active === "/technology" && "active"
            }`}
            onClick={() => navigate("/technology")}
          >
            <span style={{ fontWeight: "bold", color: "white" }}>03</span>{" "}
            Technology
          </li>
        </ul>
      )}
    </>
  );
}
