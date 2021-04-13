import { SET_REPOSITORY, IS_LOADING, IS_REPOSITORY, IS_ERROR } from './types';

export const setRepos = (repos) => {
    return {
        type: SET_REPOSITORY,
        payload: repos,
    };
};

export const setLoading = (bool) => {
    return {
        type: IS_LOADING,
        payload: bool,
    };
};

export const setCheckRepo = (bool) => {
    return {
        type: IS_REPOSITORY,
        payload: bool,
    };
};

export const setCheckUser = (bool) => {
    return {
        type: IS_ERROR,
        payload: bool,
    };
};
