import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo.svg"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Simply Recipes" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(!show)}
          >
            Home
          </Link>
          <Link
            to="/Recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(!show)}
          >
            Recipes
          </Link>
          <Link
            to="/Tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(!show)}
          >
            Tags
          </Link>
          <Link
            to="/About"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(!show)}
          >
            About
          </Link>
          <div className="nav-link contact-link">
            <Link to="/Contact" className="btn" onClick={() => setShow(!show)}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
