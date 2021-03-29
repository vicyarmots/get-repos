import axios from 'axios';
import { setUser } from './action';

export const getRepos = (username) => async (dispatch) => {
	const response = await axios.get(`https://api.github.com/users/${username}/repos`);
	dispatch(setUser(response.data));
};
