import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const [active, setActive] = useState("");
  const toggleActive = () => {
    if (active === " show") setActive("");
    else setActive(" show");
  };

  return (
    <>
      <header>
        <h2 className="logo">QuizWiz</h2>
        <div className="menus">
          <div className={"menu" + active} onClick={toggleActive}>
            <i class="bi bi-list"></i>
          </div>
          <nav className="navigation">
            <div className="child-nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/categories">Categories</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/">Contact</NavLink>
              <button
                className="loginbtn"
                onClick={() => props.setModalShow(true)}
              >
                Login
              </button>
              {/* <Button variant="primary" onClick={() => setModalShow(true)}>Login</Button> */}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
