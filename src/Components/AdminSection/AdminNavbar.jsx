import React from "react";
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <div className="">
      <nav class="navbar navbar-expand-md navbar-light bg-light ">
        <div class="container-fluid navDiv">
          <div class="navbar-brand1">
            BABY <span className="Chuz">Admin</span>{" "}
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
            <span class="navbar-toggler-icon togler"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/AdminProduct" class="nav-link navLINK">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/AdminUserInfo" class="nav-link navLINK">
                  Users
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link navLINK">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminNavbar;
