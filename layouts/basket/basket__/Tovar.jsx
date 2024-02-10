import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Context } from '../Basket';

const Tovar = ({ currentItem, length, isChange, arr, setArr, setChange }) => {
  const [quentityTovars, setQuentityTovars] = useState(1);
  const dispatch = useDispatch();

    const decrementFunc = (currentItem) => {
        setArr(() => {
            return arr.map(item => {
                if (item.currentItem.id === currentItem.id) {
                    if (item.length <= 1) {
                        return item;
                    }
                    return {
                        ...item,
                        length: --item.length
                    }
                }
                return item;
            })
        })
    }
  
    const incrementFunc = (e) => {
        setArr(() => {
            return arr.map(item => {
                if (item.currentItem.id === currentItem.id) {
                    if (item.length >= currentItem.quantity) {
                        return item;
                    }
                    return {
                        ...item,
                        length: ++item.length
                    }
                }
                return item;
            })
        })
    }

    const deleteTovar = () => {
        setArr(prev => prev.filter(item => item.currentItem.id !== currentItem.id));
    }

    const context = useContext(Context);

    useEffect(() => {
        if (context) return;

        setArr(() => {
            return arr.map(item => {
                return {
                    ...item,
                    price: parseInt(item.currentItem.price.replaceAll(' ', ''))*item.length
                }
            })
        })
    }, [context])

  return (
    <section key={currentItem?.id} className="basket-table-item">
        <Link to={`/shop/${currentItem?.path}`}> 
            <img className='basket-table-item__img' src={currentItem?.imgs[0]} alt="" />
        </Link>
        <Link className='basket-table-item__name' to={`/shop/${currentItem?.path}`}>Парфюмерная вода {currentItem?.name}</Link>
        <p className='basket-table-item__price'>
            <span>{currentItem?.price.split(' ')[0]}</span>
            <br/>
            <span>{currentItem?.price.split(' ')[1]} ₽</span>
        </p>
        <section className='tovar-page__quantity'>
            <button
                onClick={
                    () => decrementFunc(currentItem)
                    }
                    className='tovar-page-quantity__decrement'
                ></button>
            <input type='text' value={length} className='tovar-page-quentity__count'/>
            <button
                onClick={
                    (e) => incrementFunc(e)
                }
                    className='tovar-page-quantity__increment'
                ></button>
        </section>
        <section className='tovar-page-folded-price'>
            <p>{arr.filter(item => item.currentItem.id === currentItem.id)[0].price.toLocaleString('ru-RU')} ₽</p>
        </section>
        <button onClick={deleteTovar} className='tovar-page-delete'>✕</button>
    </section>
  )
}

export default Tovar;



// const filtered = arr.filter(item => item.currentItem.id === currentItem.id);
// // setArr(arr.map(item => item.currentItem.id === currentItem.id ? item.length++ : item.length))
// //   setArr(arr.map(item => item.currentItem.id === currentItem.id ? {currentItem: currentItem, length: item.length++} : {currentItem: currentItem, length: item.length}));
// //   console.log(arr.map(item => item.currentItem.id === currentItem.id ? {currentItem: currentItem, length: item.length++} : {currentItem: currentItem, length: item.length}))
// console.log(arr.map(item => item.currentItem.id === currentItem.id ? Array.from(new Set(arr.map(item => JSON.stringify([item, {currentItem: currentItem, length: item.length++}])))).map(JSON.parse) : {currentItem: currentItem, length: item.length}))
// // setArr(arr.map(item => [...arr, {currentItem: item.currentItem, length: item.length++}]));
// filtered.length++;
// // console.log(e.currentTarget.parentNode.childNodes[1].value++)
//   if (length >= currentItem.quantity) {
//       console.log();
//   } else {
//       // setArr(arr.map(item => item.currentItem.id === currentItem.id ? item.length++ : item.length))
//       // arr.map(item => item.currentItem.id === currentItem.id ? [...arr, {currentItem: currentItem, length: item.length++}] : {currentItem: currentItem, length: item.length});
//       // setQuentityTovars(prev => ++prev);
//   }