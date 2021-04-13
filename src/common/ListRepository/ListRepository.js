import { useSelector } from 'react-redux';
import {
    getRepository,
    getLoading,
    getRepositoryStatus,
    getUserStatus,
} from '../../Redux/repos/selectors';
import ItemRepo from '../ItemRepo/ItemRepo';
import './listRepository.css';

function ListRepository() {
    const repos = useSelector(getRepository);
    const isLoading = useSelector(getLoading);
    const isRepository = useSelector(getRepositoryStatus);
    const isError = useSelector(getUserStatus);

    return (
        <div className="list">
            {isLoading === false ? (
                <ItemRepo repos={repos} />
            ) : isError === false ? (
                <h3>Loading...</h3>
            ) : isRepository === false ? (
                <h3>404 User not found</h3>
            ) : (
                <h3>No repository</h3>
            )}
        </div>
    );
}

export default ListRepository;
