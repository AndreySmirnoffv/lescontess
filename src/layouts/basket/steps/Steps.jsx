import React from 'react'
import './Steps.sass'

export const Steps = ({ steps }) => {
  return (
    <ul className="basket-page__steps">
        {
            steps.map(item => (
                <li key={item.id} className='basket-step'>
                    <span className={item.active ? 'basket-step__num basket-step__num-active' : 'basket-step__num'}>{item.id}</span>
                    <p>{item.name}</p>
                    {
                        item.id === steps.length
                        ? null
                        : <img src={require('../../../assets/shop/tovar/free-icon-right-arrow-angle-54833.png')} alt="" />
                    }
                </li>
            ))
        }
    </ul>
  )
}

