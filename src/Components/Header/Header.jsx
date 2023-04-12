import React, { useState } from 'react'
import css from "./Header.css"
import { Link } from "react-router-dom";

export const Header = () => {

    const [toggleNav, settoggleNav] = useState(false)

  return (
    <>
    <header>

        <div className="container flexSB">
            <nav className="flexSB">
                <div className="logo">
                    {/* <img src="" alt="" /> */}
                    <h2>StreamIt</h2>
                </div>

                <ul className={toggleNav ? "navMenu-list" : "flexSB"}>
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/series" className='nav-link'>Series</Link>
                    <Link to="/movies" className='nav-link'>Movies</Link>
                    <Link to="/pages" className='nav-link'>Pages</Link>
                    <Link to="/pricing" className='nav-link'>Pricing</Link>
                    <Link to="/contact" className='nav-link'>Contact</Link>
                </ul>

                <button className="toggle" onClick={() => settoggleNav(prev => !prev)}>
                    <i className={toggleNav ? "fas fa-times" : "fas fa-bars"}></i>
                </button>
            </nav>

            <div className="account flexSB">
                <i className='fas fa-search'></i>
                <i className='fas fa-bell'></i>
                <i className='fas fa-user'></i>
                <button className='btn'>subscribe Now</button>
            </div>

        </div>

    </header>
    </>
  )
}
