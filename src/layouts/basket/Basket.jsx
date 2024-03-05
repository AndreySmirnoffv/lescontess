import React, { createContext, useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import TopPath from '../top-path/TopPath';
import './basket.sass';
import Tovar from './basket__/Tovar';
import { Coupon } from './coupon/Coupon';
import { Steps } from './steps/Steps';

export const Context = createContext(null);

export const Basket = () => {
  const state = useSelector(state => state.basketReducer);
  const [arr, setArr] = useState(Array.from(new Set(state.map(item => JSON.stringify(item)))).map(JSON.parse)); // товары
  const [isChange, setIsChange] = useState(false);
  const [lastPrice, setLastPrice] = useState(0);
  const dispatch = useDispatch()
  const steps = [
    {
      id: 1,
      name: 'Корзина',
      active: true,
      completed: false
    },
    {
      id: 2,
      name: 'Оформление заказа',
      active: false,
      completed: false
    },
    {
      id: 3,
      name: 'Заказ',
      active: false,
      completed: false
    },
  ]

  const pathL = [
    {
      id: 1, 
      name: 'Главная',
      path: '/'
    }
  ]

  useEffect(() => {
    setIsChange(true);
  }, [arr])

  useEffect(() => {
    if (isChange) return;

    const reduce = arr.reduce((acc, item) => {
      let length = parseInt(item.currentItem.price.replaceAll(' ', ''))*item.length;
      return acc+=length
    }, 0)
    dispatch({type: 'SET_PRICE', payload: reduce})
    setLastPrice(reduce);
  }, [isChange])


  const [isActiveFormLoc, setIsActiveFormLoc] = useState(false);

  return (
    <div className='basket-page'>
      <TopPath path={pathL} productName='Корзина' pageName='Корзина'/>
      <div className="basket-page__container">
        <Steps steps={steps}/>
        {
          !arr.length
          ? (
            <div className='basket-page__no-products'>
              {/* <img src={require('../../assets/basket/icons8-сумка-для-покупок-100.png')} alt="" /> */}
              <p className='basket-page-no-products__title'>Ihr Korb ist gerade leer.</p>
              <Link to={'/shop'}>Вернуться в магазин</Link>
            </div>
          )
          : (
          <article className='basket-page__info'>
            <div className="basket-page__table">
              <div className="basket-table-left">
                <div className="basket-table-top">
                  <p className='basket-tovar-title'>ТОВАР</p>
                  <p className='basket-tovar-price'>ЦЕНА</p>
                  <p className='basket-tovar-col'>КОЛИЧЕСТВО</p>
                  <p className='basket-tovar-pod'>ПОДЫТОГ</p>
                </div>
                <div className="basket-table-products">
                  <Context.Provider value={isChange}>
                    {
                      arr.map(({currentItem, length}) => (
                          <Tovar setChange={(e) => setIsChange(e)} isChange arr={arr} setArr={setArr} currentItem={currentItem} length={length}/>
                      ))
                    }
                  </Context.Provider>
                </div>
                <div className='basket-tovar-additionally'>
                  <Coupon />
                  <button onClick={() => setIsChange(false)} className='basket-tovar-reload'>{isChange ? 'Обновить' : 'Нет изменений'}</button>
                </div>
              </div>
            </div>
            <div className="basket-page__amount">
              <p className='basket-page-amount__title'>Сумма заказов</p> 
              <article className='basket-page-amount__info'>
                <div className='basket-page-amount__subtotal'>
                  <p>Подытог</p>
                  <p>{lastPrice.toLocaleString('ru-RU')} ₽</p>
                </div>
                <div className='basket-page-amount__delivery'>
                  <p>Доставка</p>
                  <p className='basket-page-amount__delivery-info'>
                    <span>
                    Введите свой адрес для просмотра параметров доставки.
                    </span>
                    <br />
                    <span onClick={() => setIsActiveFormLoc(prev => !prev)} className='basket-page-amount__for-delivery'>Рассчитать стоимость доставки</span>
                    <div className={isActiveFormLoc ? 'basket-page-amount__locations basket-page-amount__locations-active' : 'basket-page-amount__locations'}>
                      locations
                    </div>
                  </p>
                </div>
                <div className="basket-page-amount__result">
                  <p>Итог</p>
                  <p className='basket-page-amount-result__price'>{lastPrice.toLocaleString('de-DE')} ₽</p>
                </div>
                <Link to={'/payment'} className='basket-page-amount__checkout'>Оформить заказ</Link>
                <Link to={'/shop'} className='basket-page-amount__continue'>Продолжить покупки</Link>
              </article>
            </div>
          </article>
          )
        }
      </div>
    </div>
  )
}


// useEffect(() => {
//   console.log(arr);
//   if (!isChange) {
//     const reduce = arr.reduce((acc, item) => {
//       return acc+=parseInt(item.price.replaceAll(' ', ''))
//     },0);
//     console.log(reduce);
//     setLastPrice(reduce.toLocaleString("ru-RU"));
//   } else {
//       console.log('абабаб');
//   }
// }, [isChange])