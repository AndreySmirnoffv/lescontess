import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { aromas } from '../../../shop/Shop';
import { secondAromas } from '../../../shop/second-page/SecondShop';
const Navigation = ({ currentItem }) => {
    const [nextTovar, setNextTovar] = useState(null);
    const [prevTovar, setPrevTovar] = useState(null);

    useEffect(() => {
        let prev = aromas[currentItem?.id-2];
        let next = aromas[currentItem?.id];
        let seocndPrev = secondAromas[currentItem?.id-2]
        let secondNext = secondAromas[currentItem?.id]
        setNextTovar(!!next ? next : aromas[aromas.length-1]);
        setPrevTovar(!!prev ? prev : aromas[0]);
        setNextTovar(!!secondNext ? secondNext : secondAromas[secondAromas.length-1])
        setPrevTovar(!!seocndPrev ? seocndPrev : secondAromas[0])
    }, [currentItem])

  return (
    <div className='tovar-page__navigation-tovars'>
        <Link
            className='tovar-page-navigation__prev'
            style={prevTovar ? {pointEvent: 'normal'} : {pointEvent: 'none'}}
            to={`/shop/${prevTovar?.path}`}
        >
            <img src={require('../../../../assets/shop/tovar/free-icon-right-arrow-angle-54833.png')} alt=""/>
        </Link>
        <Link className='tovar-page-navigation__shop' to='/shop'>
            <svg className="icon" aria-label="all posts" width="22" height="22"
                    xmlns="https://www.w3.org/2000/svg">
                <path fill='#626262' d="M7,2v5H2V2H7 M9,0H0v9h9V0L9,0z"></path>
                <path fill='#626262' d="M20,2v5h-5V2H20 M22,0h-9v9h9V0L22,0z"></path>
                <path fill='#626262' d="M7,15v5H2v-5H7 M9,13H0v9h9V13L9,13z"></path>
                <path fill='#626262' d="M20,15v5h-5v-5H20 M22,13h-9v9h9V13L22,13z"></path>
            </svg>
        </Link>

        <Link
            className='tovar-page-navigation__next'
            style={nextTovar ? {pointEvent: 'normal'} : {pointEvent: 'none'}}
            to={`/shop/${nextTovar?.path}`}
        >
            <img src={require('../../../../assets/shop/tovar/free-icon-right-arrow-angle-54833.png')} alt=""/>
        </Link>
    </div>
  )
}

export default Navigation