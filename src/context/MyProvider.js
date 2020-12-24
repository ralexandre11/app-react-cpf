import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import CpfService from '../services/CpfService';

function MyProvider({ children }) {
  const [cpf, setCpf] = useState([]);

  async function getAllCpf() {
    const service = new CpfService();
    const response = await service.filter();
    const allCpf = response.data;
    setCpf(allCpf);
  }

  async function filterCpf(cpf) {
    const service = new CpfService();
    const response = await service.filter(cpf);
    const myCpf = response.data;
    setCpf(myCpf);
  }

  useEffect(() => {
    getAllCpf();
  }, []);

  const contextValue = {
    cpf,
    setCpf,
    getAllCpf,
    filterCpf,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
