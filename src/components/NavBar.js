import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';

function NavBar() {
  const { filterCpf, getAllCpf } = useContext(MyContext);
  const [searchCpf, setSearchCpf] = useState('');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/main" className="navbar-brand">Project</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" 
                aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="https://github.com/ralexandre11/ImportCpf" className="nav-link">Back-end Project</Link>
            </li>
            <li className="nav-item">
              <Link to="https://github.com/ralexandre11/app-react-cpf" className="nav-link">Front-end Project</Link>
            </li>
            <li className="nav-item active">
              <Link to="/cpf/new" className="nav-link">NEW CPF</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input 
              className="form-control mr-sm-1"
              type="text"
              placeholder="Enter CPF"
              value={ searchCpf }
              onChange={ (e) => setSearchCpf(e.target.value) }
            />
            <button
              className="btn btn-success my-2 my-sm-0 mr-sm-1"
              type="button"
              onClick={ () => filterCpf(searchCpf) }
            >
              Search CPF
            </button>
            <button
              className="btn btn-danger my-2 my-sm-0"
              type="button"
              onClick={ () => getAllCpf() }
            >
              List All
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
