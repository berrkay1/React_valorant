import React, { useEffect, useRef, useState } from 'react'
import logo from '../images/logo.png'
import { Link, useLocation } from 'react-router-dom';

function Header() {



    const location = useLocation();
    const currentPage = useRef(location.pathname);

    useEffect(() => {

        if (location.pathname !== '/') {
            currentPage.current = location.pathname.slice(1)
            console.log(currentPage.current);
        } else {
            currentPage.current = 'home';
        }

    }, [location]);


    return (
        <header>
            <div className="top-header">
                <Link to={'/'}>
                <img src={logo} alt="logo" />
                <h1>WOLORANT WİKİ</h1>
                </Link>
            </div>
            <nav>
                <ul>
                    
                    <li>
                        <Link to='/weapons'>Weapons</Link>
                    </li>
                    <li>
                        <Link to='/agents'>Agents</Link>
                    </li>
                    <li>
                        <Link to='/maps'>Maps</Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Header;