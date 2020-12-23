import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CpfList from '../components/CpfList';

function Main() {
  return (
    <div className="container">

      <Header />
      <div >
        <h3 className="sub-title">List of CPF Numbers</h3>

        <Link to="/cpf/new" role="button">
          <button
            className="btn btn-primary btn-lg"
            type="button"
          >
            Add new CPF
          </button>
        </Link>        

        <CpfList />
      </div>

    </div>
  );
}

export default Main;
