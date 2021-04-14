import { useSelector } from 'react-redux';
import {
    getRepository,
    getLoading,
    getRepositoryStatus,
    getUserStatus,
} from '../../redux/repos/selectors';
import { ItemRepository } from '../index';
import './listRepository.css';

const ListRepository = () => {
    const repositories = useSelector(getRepository);
    const isLoading = useSelector(getLoading);
    const isRepository = useSelector(getRepositoryStatus);
    const isError = useSelector(getUserStatus);

    const isLoadingCheck =
        isLoading === false ? (
            <ItemRepository repositories={repositories} />
        ) : (
            <h3>Loading...</h3>
        );
    const isRepositoryCheck =
        isRepository === false ? isLoadingCheck === false : <h3>No repos</h3>;
    const isErrorCheck = isError === true && <h3>User not found</h3>;

    return (
        <div className="list">
            {isRepositoryCheck === false &&
                isErrorCheck === false &&
                isLoadingCheck}
            {isErrorCheck === false && isRepositoryCheck}
            {isRepositoryCheck && isErrorCheck}
        </div>
    );
};

export default ListRepository;
