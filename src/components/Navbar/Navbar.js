import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

const Navbar = () => {
  const {logout} = useLogout()
  const {dispatch} = useAuthContext();
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-w py-3 shadow-sm">
        <div class="container">
          <Link class="navbar-brand fw-bold fs-4" to="/">
            Pyson SHOP
          </Link>
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
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="buttons">
             
              <Link to="/additem" className="btn btn-outline-dark ">
                <i class="fa fa-shopping-cart me-1"></i> Add Item{" "}
              </Link>
              <Link to="/login" className="btn btn-outline-dark ms-2">
                <i class="fa fa-sign-in me-1"></i> Login{" "}
              </Link>
              <Link to="/register" className="btn btn-outline-dark ms-2">
                <i class="fa fa-user-plus me-1"></i> Register{" "}
              </Link>
              <Link to="/cart" className="btn btn-outline-dark ms-2">
                <i class="fa fa-shopping-cart me-1"></i> Cart (){" "}
              </Link>
              <Link to ="" className="btn btn-outline-dark ms-2" onClick={logout}>
                <i class="fa fa-shopping-cart me-1"></i> Çıkış
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
