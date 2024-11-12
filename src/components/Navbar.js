import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="fixed-top border-bottom border-success">
      <>
        {/* <div className="container"style={myStyle}> */}

        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {props.title}
            </Link>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    {props.aboutText}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/faq">
                    {props.listDropdown}
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <div
                  className={`form-check form-switch form-check-reverse text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                >
                  <span className="navbar-text me-3">
                    {" "}
                    {props.displayText}{" "}
                  </span>
                  <input
                    className="form-check-input border-success"
                    type="checkbox"
                    id="flexSwitchCheckReverse"
                    onClick={props.toggleMode}
                    // onClick={toddleStyle} (it is till now not used but will be in use and the para written here is to be deleted)
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckReverse"
                  ></label>
                </div>
              </form>
            </div>
          </div>
        </nav>
        {/* </div> */}
      </>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  listDropdown: PropTypes.string,
};
Navbar.defaultProps = {
  title: "set title here",
  aboutText: "About",
  listDropdown: "FAQ",
};
