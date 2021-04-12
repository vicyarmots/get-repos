import React from 'react';
import './itemRepo.css';
import { useSelector } from 'react-redux';
import {
    getRepo,
    getLoading,
    getRepositoryStatus,
    getUserStatus,
} from '../../Redux/repos/selectors';

const ItemRepo = ({ repos }) => {
    return (
        <div className="item-repo">
            {repos.map((item, index) => {
                return (
                    <ul key={index}>
                        <a href={item.html_url}>{item.name}</a>
                    </ul>
                );
            })}
        </div>
    );
};

export default ItemRepo;
