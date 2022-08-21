import React from 'react'
import img1 from '../Img/img1920/Form.png';
import img2 from '../Img/img360/Imágen-3.png'

function Form() {
  return (
    <>
        <div className='from'>
            <img src={img1} className="from__img1"  alt="" srcset="" />
            <img src={img2} className="from__img2"  alt="" srcset="" />
        </div>
    </>
  )
}

export default Form