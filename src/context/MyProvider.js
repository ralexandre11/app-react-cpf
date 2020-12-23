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

  useEffect(() => {
    getAllCpf();
  }, []);

  const contextValue = {
    cpf,
    setCpf,
    getAllCpf,
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
