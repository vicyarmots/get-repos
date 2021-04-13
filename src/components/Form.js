import React from 'react';
import ListRepository from '../common/ListRepository/ListRepository';
import Header from '../common/Header/Header';
import SeacrhForm from '../common/Form/SearchForm';

function Form() {
    return (
        <div className="form">
            <Header />
            <SeacrhForm />
            <ListRepository />
        </div>
    );
}

export default Form;
