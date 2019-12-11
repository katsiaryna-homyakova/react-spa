import React from 'react';

import './button.scss'

const Button = ({text, classes, handleClick, id}) => (
    
    <button onClick={handleClick} className={`btn ${classes}`} id={id}> {text}</button>
 );
export default Button;