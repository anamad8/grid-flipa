import React from 'react';
import './CSS/Css.css';
import logo from '../Img/img1440/Iso.png'
import { Link } from 'react-router-dom';
import habuer from '../Img/img360/ic-menu.png';


function Header() {
  return (
    <div className='header'>
       <div className='logo'>
            <img src={logo} alt=""  />
        </div>
        <div className='menu'>
            <Link className='menu1' to="#">HOME</Link> 
            <Link className='menu2' to="#">SHOP</Link> 
            <Link className='menu3' to="#">CONTACTO</Link>
        </div>
        <button className='menuHbuer'>
            <img src={habuer}alt="" />
        </button>
         
    </div>
  )
}

export default Header