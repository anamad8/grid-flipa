import React from 'react';
import img from '../../img1440/Imágen.png';
import Main2 from './Main2';
import Main3 from './Main3';

function Main1() {
  return (
    <>
    <div className='main'>
        <img src={img} alt="" />
        <Main2/> 
        <Main3/>
    </div>
    
    </>
    
  )
}

export default Main1