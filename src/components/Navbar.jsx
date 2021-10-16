import React from "react";
import { NavLink } from "react-router-dom";
import MCsecond from "./MCsecond";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LoginIcon from "@mui/icons-material/Login";
import CallIcon from "@mui/icons-material/Call";

function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg border-bottom">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <img
                    style={{ width: "95%" }}
                    className="logo"
                    src="https://www.freshmenu.com/images/fm-header-logo.svg"
                    alt="phonics-logo"
                    class="fixed-logo"
                  />
                </NavLink>
                <div>
                  <span className="tc-grey">Deliver to : </span>
                  <span className="tc-orange"> Powai , Mumbai , Mah... </span>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item m-0 p-0">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link p-0"
                        to="/review"
                      >
                        <div className="bg-warning p-3">
                          <h5 className="m-0">FreshPass</h5>
                          <p className="m-0 px-2">Get extra 20% off</p>
                        </div>
                      </NavLink>
                    </li>
                    <li className="nav-item try bg-voilet">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link mt-3 mx-2"
                        to="/plans"
                      >
                        <h5 className="my-auto tc-white">Try FreshClub</h5>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link mt-3 mx-2"
                        to="/contact"
                      >
                        <h5>Download App</h5>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid nav_bg shadow mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light secondnav p-0">
              <MCsecond />
              <div className="d-flex flex-row">
                <div className="p-2 m-3 mx-4">
                  <CallIcon />
                </div>
                <div className="p-2 m-3 mx-5">
                  <span>
                    <SearchIcon />
                  </span>
                  <span>Search</span>
                </div>
                <div className="p-2 m-3 mx-5">Offers</div>
                <div className="p-2 m-3 mx-4">
                  <HelpOutlineIcon />
                </div>
                <div className="p-2 m-3 mx-4">
                  <LoginIcon />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
