import React from 'react';

import './index.scss'

const Button = ({text, classes, handleClick}) => (
    
    <button onClick={handleClick} className={`btn ${classes}`}> {text}</button>
 );
export default Button;