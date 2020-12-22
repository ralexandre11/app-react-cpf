import React from 'react';
// import Footer from '../components/Footer';
import Header from '../components/Header';
import CpfList from '../components/CpfList';

function Main() {
  return (
    <div className="app-cpf">

      <Header />

      <div >
        <h2 className="sub-title">Liste des numéros de CPF</h2>
        <CpfList />
      </div>

    </div>
  );
}

export default Main;