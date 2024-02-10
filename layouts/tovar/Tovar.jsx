import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { aromas } from '../shop/Shop';
import { secondAromas } from '../shop/second-page/SecondShop';
import TopPath from '../top-path/TopPath';
import TovarContainer from './tovar-page/TovarContainer';
import './tovar.sass';

const Tovar = () => {
  const { path } = useParams();
  const [currentItem, setCurrentItem] = useState();
  const pathL = [
    {
      id: 1,
      name: 'Главная',
      path: '/'
    },
    {
      id: 2,
      name: 'Магазин',
      path: '/shop'
    },
    {
      id: 3,
      name: currentItem?.unPath.name,
      path: currentItem?.unPath.path
    }
  ];

  useEffect(() => {
    const allAromas = [...aromas, ...secondAromas];
    setCurrentItem(allAromas.find((aroma) => aroma.path === path));
  }, [path]);

  useEffect(() => {
    currentItem?.imgs.forEach((item) => {
      console.log(item);
    });
  }, [currentItem]);

  return (
    <div className='tovar-page'>
      <TopPath path={pathL} productName={currentItem?.name} pageName='Магазин' />
      <TovarContainer currentItem={currentItem} />
    </div>
  );
};

export default Tovar;


// <button
// onClick={
// () => setQuentityTovars(quentityTovars.slice(0, quentityTovars.length-1))
// }
// className='tovar-page-quantity__decrement'
//     >-</button>
// <input onInput={(e)} type='text' value={quentityTovars.length} className='tovar-page-quentity__count'/>
// <button
//     onClick={
//         () => setQuentityTovars([...quentityTovars, currentItem])
//     }
//     className='tovar-page-quantity__increment'
// >+</button>