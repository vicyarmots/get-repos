import React, { useState } from 'react';
import ListRepos from './ListRepos';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../Redux/middleware';

function Form() {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();
	const repo = useSelector((state) => state.userReducer.user);

	const inputHandler = (event) => {
		setInput(event.target.value);
	};

	console.log(repo);

	const submitHandler = (event) => {
		event.preventDeafult();
		dispatch(getRepos(input));
	};

	return (
		<div className="form">
			<h2>Search Github Repos</h2>
			<form>
				<input placeholder="username" name="user" onChange={inputHandler} />
				<button onClick={submitHandler}>Find</button>
			</form>
			<ListRepos repo={repo} />
		</div>
	);
}

export default Form;
