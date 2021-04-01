export const setRepos = (repos) => {
    return {
        type: 'SET_REPOS',
        payload: repos,
    };
};

export const setLoading = (bool) => {
    return {
        type: 'IS_LOADING',
        payload: bool,
    };
};

export const setCheckRepo = (bool) => {
    return {
        type: 'IS_REPO',
        payload: bool,
    };
};

export const setCheckUser = (bool) => {
    return {
        type: 'IS_USER',
        payload: bool,
    };
};
