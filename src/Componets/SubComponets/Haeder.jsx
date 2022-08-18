import React from 'react';
import logo from "../../img1440/Iso.png";
import { Link } from 'react-router-dom';
import habuer from '../../img360/ic-menu.png'

function Haeder() {

    function btnHaburgesa(params) {
        
    }

  return (

    <div className='header'>
       <div className='logo'>
            <img src={logo} alt="" sizes="" srcset="" />
        </div>
        <div className='menu'>
            <Link className='menu1' to="#">HOME</Link> 
            <Link className='menu2' to="#">SHOP</Link> 
            <Link className='menu3' to="#">CONTACTO</Link>
        </div>
        <button className='menuHbuer' onClick={btnHaburgesa}>
            <img src={habuer}alt="" />
        </button>
         
    </div>
  )
}

export default Haeder