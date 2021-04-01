import React from 'react';
import { useSelector } from 'react-redux';
import { getRepo, getLoading } from '../../Redux/repos/selectors';
import ItemRepo from '../ItemRepo/ItemRepo';
import './listRepos.css';

function ListRepos() {
    const repos = useSelector(getRepo);
    const isLoading = useSelector(getLoading);
    return (
        <div className="list">
            {isLoading === false ? (
                <ItemRepo repos={repos} />
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    );
}

export default ListRepos;
