export const getRepo = (state) => state.reposReducer.repos;
export const getLoading = (state) => state.reposReducer.isLoading;
export const getRepositoryStatus = (state) => state.reposReducer.isRepository;
export const getUserStatus = (state) => state.reposReducer.isError;
