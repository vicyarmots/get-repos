import React from 'react';
import './input.css';

function Input({ input, inputHandler }) {
    return (
        <input
            value={input}
            placeholder="username"
            name="user"
            onChange={inputHandler}
        />
    );
}

export default Input;
