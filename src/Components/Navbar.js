import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [navbar, setnavbar] = useState(1);

  return (
    <header className="head">
      <div className="head">
        <h1>GYM TEMPLATE </h1>
      </div>
      <nav>
        <Link
          className={
            location.pathname === "/"
              ? "navbar-color navbar-color2"
              : "navbar-color"
          }
          onClick={() => setnavbar(1)}
          to="/"
        >
          Home
        </Link>
        <Link
          className={
            location.pathname === "/blog"
              ? "navbar-color navbar-color2"
              : "navbar-color"
          }
          onClick={() => setnavbar(2)}
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className={
            location.pathname === "/nutrition"
              ? "navbar-color navbar-color2"
              : "navbar-color"
          }
          onClick={() => setnavbar(3)}
          to="/nutrition"
        >
          Nutrition
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
