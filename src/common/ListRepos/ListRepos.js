import React from 'react';
import { useSelector } from 'react-redux';
import {
    getRepo,
    getLoading,
    getRepositoryStatus,
    getUserStatus,
} from '../../Redux/repos/selectors';
import ItemRepo from '../ItemRepo/ItemRepo';
import './listRepos.css';

function ListRepos() {
    const repos = useSelector(getRepo);
    const isLoading = useSelector(getLoading);
    const isRepository = useSelector(getRepositoryStatus);
    const isError = useSelector(getUserStatus);
    console.log(isRepository);
    return (
        <div className="list">
            {isLoading === false ? (
                <ItemRepo repos={repos} />
            ) : isError === false ? (
                <h3>Loading...</h3>
            ) : isRepository === false ? (
                <h3>404</h3>
            ) : (
                <h3>No repos</h3>
            )}
        </div>
    );
}

export default ListRepos;
