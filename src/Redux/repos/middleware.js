import axios from 'axios';
import { setLoading, setRepos } from './action';

export const getRepos = (username) => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${username}/repos`
        );
        dispatch(setLoading(true));
        dispatch(setRepos(response.data));
    } catch (error) {
        console.log(error);
    }
};
