import { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { getRepository } from '../../redux/repos/middleware';
import './serachForm.css';

const SearchForm = () => {
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const inputHandler = (event) => {
        setInput(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(getRepository(input));
    };
    return (
        <form>
            <Input input={input} inputHandler={inputHandler} />
            <Button submitHandler={submitHandler} setInput={setInput} />
        </form>
    );
};

export default SearchForm;
