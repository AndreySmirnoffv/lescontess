import React from 'react'
import aromaImage from '../../../assets/img/main-page/aroma-img.png'
import './aroma.sass'

const Aroma = () => {
  return (
    <div className='aroma-wrapper'>
        <div className="aroma">
            <div className="left">
                <a href="">
                    <img src={aromaImage} alt="" />
                </a>
            </div>
            <div className="right">
                <h1>Ароматы</h1>
            </div>
        </div>
    </div>
  )
}

export default Aroma