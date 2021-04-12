import axios from 'axios';
import { setLoading, setRepos, setCheckRepo, setCheckUser } from './action';

export const getRepos = (username) => async (dispatch) => {
    try {
        await dispatch(setLoading(true));

        const response = await axios.get(
            `https://api.github.com/users/${username}/repos`
        );

        if (response.data.length !== 0) {
            dispatch(setRepos(response.data));
        } else {
            dispatch(setCheckRepo(true));
        }
    } catch (error) {
        dispatch(setCheckUser(true));
    }
};
