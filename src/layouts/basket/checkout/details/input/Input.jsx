import React, { useState } from 'react'
import './Input.sass'

export const Input = ({ placeholder, topPlaceholder, list, defaultCity, type = 'text', handleData, textarea, name }) => {
    const [blur, setBlur] = useState(false);

  return (
    <div className='input-checkout-container'>
        { topPlaceholder ? <p className='top-placeholder-checkout'>{topPlaceholder}</p> : null }
        {
            textarea
            ?
                <textarea name={name} onInput={(e) => handleData(e)} className='input-checkout' rows="2" cols='5' onResize={(e) => console.log(e)}/>
            :
                list
                ? (
                    <section>
                        <p>{defaultCity}</p>
                    </section>
                )
                : <input 
                    name={name}
                    style={blur ? {borderColor: 'yellow'} : null} 
                    onInput={handleData ? (e) => handleData(e) : null} 
                    onBlur={(e) => setBlur(!!e.target.value)} 
                    placeholder={placeholder}
                    className='input-checkout' 
                    type={type}
                />
                    
        }
    </div>
  )
}
