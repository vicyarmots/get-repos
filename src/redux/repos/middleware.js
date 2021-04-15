import axios from 'axios';
import {
    setLoading,
    setRepository,
    setCheckRepository,
    setCheckUser,
} from './action';

export const getRepository = (username) => async (dispatch) => {
    try {
        await dispatch(setLoading(true));

        const response = await axios.get(
            `https://api.github.com/users/${username}/repos`
        );

        if (response.data.length !== 0) {
            dispatch(setRepository(response.data));
        } else {
            dispatch(setCheckRepository(true));
        }
    } catch (error) {
        dispatch(setCheckUser(true));
    }
};
