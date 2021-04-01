const initState = {
    repos: [],
    isLoading: false,
    isRepo: false,
    isUser: false,
};

export const reposReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_REPOS': {
            return {
                ...state,
                repos: action.payload,
                isLoading: false,
                isRepo: false,
                isUser: false,
            };
        }
        case 'IS_LOADING': {
            return { ...state, isLoading: action.payload };
        }
        case 'IS_REPO': {
            return { ...state, isRepo: true };
        }
        case 'IS_USER': {
            return { ...state, isUser: true };
        }
        default: {
            return state;
        }
    }
};
