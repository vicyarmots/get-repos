import React from 'react';
import './serachForm.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

function SearchForm({ input, inputHandler, submitHandler, setInput }) {
    return (
        <form>
            <Input input={input} inputHandler={inputHandler} />
            <Button submitHandler={submitHandler} setInput={setInput} />
        </form>
    );
}

export default SearchForm;
