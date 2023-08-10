import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setnavbar] = useState();

  return (
    <header className="head">
      <div className="head">
        <h1>GYM TEMPLATE </h1>
      </div>
      <nav>
        <Link
          className={
            navbar === 1 ? "navbar-color navbar-color2" : "navbar-color"
          }
          onClick={() => setnavbar(1)}
          to="/"
        >
          Home
        </Link>
        <Link
          className={
            navbar === 2 ? "navbar-color navbar-color2" : "navbar-color"
          }
          onClick={() => setnavbar(2)}
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className={
            navbar === 3 ? "navbar-color navbar-color2" : "navbar-color"
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
