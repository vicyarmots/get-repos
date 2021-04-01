import React from 'react';
import { useSelector } from 'react-redux';
import { getRepo, getLoading } from '../Redux/repos/selectors';
import '../style.css';

function ListRepos() {
    const repos = useSelector(getRepo);
    const isLoading = useSelector(getLoading);
    return (
        <div className="list">
            {isLoading === false ? (
                repos.map((item, index) => {
                    return (
                        <ul key={index}>
                            <a href={item.html_url}>{item.name}</a>
                        </ul>
                    );
                })
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    );
}

export default ListRepos;
