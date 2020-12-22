import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import { getAllCpf } from '../services/api';

function MyProvider({ children }) {
  const [cpf, setCpf] = useState([]);

  useEffect(() => {
    async function fetchALL() {
      const allCpf = await getAllCpf();
      console.log(allCpf);
      setCpf(allCpf);
    }
    fetchALL();
  }, []);

  const contextValue = {
    cpf,
    setCpf,
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
