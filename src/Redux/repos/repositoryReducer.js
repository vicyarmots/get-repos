import { SET_REPOSITORY, IS_LOADING, IS_REPOSITORY, IS_ERROR } from './types';

const initState = {
    repos: [],
    isLoading: false,
    isRepository: false,
    isError: false,
};

export const repositoryReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_REPOSITORY: {
            return {
                ...state,
                repos: action.payload,
                isLoading: false,
                isRepository: false,
                isError: false,
            };
        }

        case IS_LOADING: {
            return { ...state, isLoading: action.payload };
        }
        case IS_REPOSITORY: {
            return { ...state, isRepository: action.payload };
        }
        case IS_ERROR: {
            return { ...state, isError: action.payload };
        }
        default: {
            return state;
        }
    }
};
