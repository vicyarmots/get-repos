import axios from 'axios';
import { setLoading, setRepos, setCheckRepo, setCheckUser } from './action';

export const getRepos = (username) => async (dispatch) => {
    try {
        await dispatch(setLoading(true));
        const response = await axios.get(
            `https://api.github.com/users/${username}/repos`
        );
        dispatch(setRepos(response.data));
    } catch (error) {
        console.log(error);
    }
};
