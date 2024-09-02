// Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Home.css";
import Search from "./Products/Search";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  useEffect(() => {
    const userss = JSON.parse(localStorage.getItem("users"));
    if (userss && userss.length > 0) {
      setUserName(userss[0].username);
    } else {
      setUserName("");
    }
  }, []);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
  };

  const handleLogIn = () => {
    navigate("/Login");
  };

  const onSearch = (e) => {
    e.preventDefault();
    navigate("/Search");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src={require("../img/NavIMG/babyLogo.png")} className="babyLogo" alt="logo" />
            BABY <span className="Chuz">LanD</span>
          </Link>

          <form className="d-flex flex-grow-1" onSubmit={onSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <button
            className="navbar-toggler ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link navBTNLINK">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link navBTNLINK">
                  Offers
                </Link>
              </li>

              <li className="nav-item navBTNLINK">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </button>
                  <ul className="dropdown-menu navBTNLINK">
                    <li>
                      <Link className="nav-link" to="/toys">
                        Toys
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/Dress">
                        Dresses
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/Food">
                        Feedings
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/AllProducts">
                        Other
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link to="/Cart" className="nav-link navBTNLINK">
                      <img src={require("../img/shopping-cart.png")} alt="" className="navIcons" />
                    </Link>
                  </li>
                  <li className="nav-item navBTNLINK">
                    <button className="nav-link btn btn-link" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link navBTNLINK">
                      <img src={require("../img/userIcon.png")} alt="" className="navIcons" />
                      &nbsp;&nbsp;{userName}
                    </Link>
                  </li>
                </>
              )}

              {!isLoggedIn && (
                <li className="nav-item navBTNLINK">
                  <button className="nav-link btn btn-link" onClick={handleLogIn}>
                    Login
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Search searchQuery={searchQuery} />
    </div>
  );
}

export default Navbar;
