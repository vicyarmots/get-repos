import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRepos } from '../Redux/repos/middleware';
import ListRepos from './ListRepos';

function Form() {
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const inputHandler = (event) => {
        setInput(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(getRepos(input));
    };

    return (
        <div className="form">
            <h2>Search Github Repos</h2>
            <form>
                <input
                    value={input}
                    placeholder="username"
                    name="user"
                    onChange={inputHandler}
                />
                <button onClick={submitHandler}>Find</button>
                <ListRepos />
            </form>
        </div>
    );
}

export default Form;
