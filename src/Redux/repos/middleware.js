import axios from 'axios';
import { setLoading, setRepos } from './action';

export const getRepos = (username) => async (dispatch) => {
    try {
        await dispatch(setLoading(true));
        const response = await axios.get(
            `https://api.github.com/users/${username}/repos`
        );
        dispatch(setRepos(response.data));
        const data = axios.request();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
