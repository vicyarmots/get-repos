const initState = {
    repos: [],
    isLoading: false,
};

export const reposReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_REPOS': {
            return { ...state, repos: action.payload, isLoading: false };
        }
        case 'IS_LOADING': {
            return { ...state, isLoading: action.payload };
        }
        default: {
            return state;
        }
    }
};
