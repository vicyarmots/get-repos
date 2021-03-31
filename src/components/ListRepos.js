import React from 'react';
import { useSelector } from 'react-redux';
import { getRepo, getLoading } from '../Redux/repos/selectors';

function ListRepos() {
    const repos = useSelector(getRepo);
    const isLoading = useSelector(getLoading);
    return (
        <div className="list">
            {isLoading === true ? (
                repos.map((item, index) => {
                    return <ul key={index}>{item.name}</ul>;
                })
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    );
}

export default ListRepos;
