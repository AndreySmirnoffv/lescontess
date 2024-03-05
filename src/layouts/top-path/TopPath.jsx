import React from 'react'
import { Link } from 'react-router-dom'
import './TopPath.sass'

const TopPath = ({ path, productName, pageName }) => {
  return (
    <div className='page-top'>
        <p className='page-top-title'>{pageName}</p>
        <ul className='page-top-path'>
            {
                path.map(item => (
                    <li key={item.id}>
                        <Link to={item.path}>{item.name}</Link>
                    </li>
                ))
            }
            <li>
                <p>{productName}</p>
            </li>
        </ul>
        <ul className='page-top-contacts'>
            <li className='page-top-vk'><Link to='https://vk.com/lescontesfrance'><img src={require('../../assets/shop/tovar/vk-contact.svg').default} alt=""/></Link></li>
            <li className='page-top-ok'><Link to='https://ok.ru/group/54769873584135'><img src={require('../../assets/shop/tovar/ok-contacts.svg').default} alt=""/></Link></li>
        </ul>
    </div>
  )
}

export default TopPath