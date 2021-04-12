const initState = {
    repos: [],
    isLoading: false,
    isRepository: false,
    isError: false,
};

export const reposReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_REPOS': {
            return {
                ...state,
                repos: action.payload,
                isLoading: false,
                isRepository: false,
                isError: false,
            };
        }

        case 'IS_LOADING': {
            return { ...state, isLoading: action.payload };
        }
        case 'IS_REPO': {
            return { ...state, isRepository: action.payload };
        }
        case 'IS_USER': {
            return { ...state, isError: action.payload };
        }
        default: {
            return state;
        }
    }
};
