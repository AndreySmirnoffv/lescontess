import React from "react";
import './button.scss'

const Button = ({ className='', children }) => {
    return (
        <button className={`${className} button-default-style`}>{children}</button>
    )
};

export default Button;