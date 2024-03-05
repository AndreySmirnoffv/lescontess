import React from "react";
import './Input.scss'

const InputElement = ({ placeholderText='', type }) => {
    return <input placeholder={placeholderText} className='input-default-style' type={type}/>
}

const Input = ({ placeholder='', placeholderText='', type='text' }) => {
    const args = {type, placeholderText}

    return (
        <>
            {
                placeholder
                ?  <div className='input-content'>
                    <p className='input-content__placeholder'>{placeholder}</p>
                    <InputElement  {...args}/>
                </div>
                :   <InputElement  {...args}/>
            }
        </>
    )
};

export default Input;