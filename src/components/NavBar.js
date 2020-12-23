import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/main" className="navbar-brand">Project</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" 
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="https://github.com/ralexandre11/ImportCpf" className="nav-link">Back-end Project</Link>
            </li>
            <li className="nav-item">
              <Link to="https://github.com/ralexandre11/app-react-cpf" className="nav-link">Front-end Project</Link>
            </li>
            <li className="nav-item">
              <Link to="/cpf/new" className="nav-link">New CPF</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
