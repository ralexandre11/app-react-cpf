import React from 'react';
import NavBar from '../components/NavBar';
import TableCpfList from '../components/TableCpfList';
import Header from '../components/Header';

function Main() {
  return (
    <div>
      <NavBar />
      <Header />
      <TableCpfList />
    </div>
  );
}

export default Main;
