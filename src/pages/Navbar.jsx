// Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import "./Home.css";
import Search from "./Products/Search";



function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user's login status
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);




useEffect(() => {
    // get User name from local storage
const userss = JSON.parse(localStorage.getItem("users"));


  if(userss && userss.length>0){
    setUserName(userss[0].username);
  }else{
    setUserName("");
  }
  
  }, []);
 
  // console.log(userName);
  useEffect(() => {
    // When the route changes, re-render the Navbar component to update the UI
    setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
  }, [location.pathname]); // Listen for changes in the route path


  const handleLogout = () => {
    // Clear the logged-in flag in localStorage and update the state
    localStorage.removeItem("loggedIn");
    
    
    setIsLoggedIn(false);
  };

  const handleLogIn = () => {
    // Clear the logged-in flag in localStorage and update the state
    
    navigate("/Login");
  };

  const onSearch = (e) => {
    e.preventDefault();
    navigate("/Search");
  };

  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class=" navbar container-fluid">
          <div class="navbar-brand">
            <img src={require("../img/NavIMG/babyLogo.png")} className="babyLogo" alt="logo" />
            BABY <span className="Chuz">LanD</span>{" "}
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link navBTNLINK">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link navBTNLINK">
                  Offers
                </Link>
              </li>
              

              <li class="nav-item navBTNLINK">
                <div class="dropdown ">
                  <button
                    class="btn dropdown-toggle "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </button>
                  <ul class="dropdown-menu navBTNLINK">
                    <li>
                      <Link class="nav-link" to="/toys">
                        Toys
                      </Link>
                    </li>
                    <li>
                      <Link class="nav-link" to="/Dress">
                        Dresses
                      </Link>
                    </li>
                    <li>
                      <Link class="nav-link" to="/Food">
                        Feedings
                      </Link>
                    </li>
                    <li>
                      <Link class="nav-link" to="/AllProducts">
                        Other
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>


              <li class="nav-item">
              {isLoggedIn ? (
                
                  <Link to="/Cart" class="nav-link navBTNLINK">
                    <img src={require("../img/shopping-cart.png")} alt=""  className="navIcons"/>
                    
                  </Link>
                
                ) : (
                  " "
                )}
              </li>

{/* login logout text */}
 <li class="nav-item navBTNLINK">
  {isLoggedIn ? (
  <button
    class="nav-link btn btn-link "
    onClick={handleLogout}
  >
    Logout
  </button>
) : (
  <button
    class="nav-link btn btn-link "
    onClick={handleLogIn}
  >
    Login
  </button>
)}
</li>


{/* user profile */}


              

 <li class="nav-item">
                
    {isLoggedIn ? (
      <>
      <Link to="/" class="nav-link navBTNLINK">
        <img src={require("../img/userIcon.png")} alt="" className="navIcons" />&nbsp;&nbsp;
      </Link> 
      <Link to="/" class="nav-link navBTNLINK">
        {userName}
      </Link>
      </>
        ) : (
        " "
      )}
  </li>
              


            </ul>
            <form class="d-flex" onSubmit={onSearch}>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <Search searchQuery={searchQuery} />
    </div>
  );
}

export default Navbar;
