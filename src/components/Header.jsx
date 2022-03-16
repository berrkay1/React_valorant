import React from 'react'
import '../styles/Header.css';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
            <img src={logo} alt="logo" />
            <h1>WOLORANT WİKİ</h1>
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