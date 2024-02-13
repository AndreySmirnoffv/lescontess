import React from 'react'

export const Coupon = () => {
  return (
    <section className='basket-tovar-additionally__coupon'>
        <input type="text" className='basket-tovar-coupon__input' placeholder='КОД КУПОНА'/>
        <button className='basket-tovar-coupon__btn'>Применить купон</button>
    </section>
  )
}
