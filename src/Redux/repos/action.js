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
