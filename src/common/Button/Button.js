import React from 'react';
import './button.css';

function Button({ submitHandler }) {
    return <button onClick={submitHandler}>Find</button>;
}

export default Button;
