import React from 'react';
import ListRepos from '../common/ListRepos/ListRepos';
import Header from '../common/Header/Header';
import SeacrhForm from '../common/Form/SearchForm';

function Form() {
    return (
        <div className="form">
            <Header />
            <SeacrhForm />
            <ListRepos />
        </div>
    );
}

export default Form;
