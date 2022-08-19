import React from 'react';
import './CSS/Css.css';
import logo from '../Img/img1440/Iso.png'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className='menu'>
            <Link to="#">HOME</Link>
            <Link to="#">SHOP</Link>
            <Link to="#">CONTACTO</Link>
        </div>
    </div>
  )
}

export default Header