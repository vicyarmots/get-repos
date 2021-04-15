export const getRepository = (state) => state.repositoryReducer.repos;
export const getLoading = (state) => state.repositoryReducer.isLoading;
export const getRepositoryStatus = (state) =>
    state.repositoryReducer.isRepository;
export const getUserStatus = (state) => state.repositoryReducer.isError;
