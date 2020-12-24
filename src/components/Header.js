import React from 'react';
import logo from '../imgs/logo.png';

function Header() {
  return (
    <div className="container cpf-header">
      <div className="page-header" id="banner">
        <div className="row">
          <div className="col-lg-8 col-md-7 col-sm-6">
            <h2>Project Rest Api CPF</h2>
            <p className="lead">List of CPF Numbers</p>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-6">
            <div className="sponsor search-bar">
              <img className='logo-spring-react' src={ logo } alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
