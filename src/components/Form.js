import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRepos } from '../Redux/repos/middleware';
import ListRepos from './ListRepos';
import Header from '../common/Header/Header';
import SeacrhForm from '../common/Form/SearchForm';

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
            <Header />
            <SeacrhForm
                input={input}
                inputHandler={inputHandler}
                submitHandler={submitHandler}
                setInput={setInput}
            />
            <ListRepos />
        </div>
    );
}

export default Form;
