import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="container-sm">
      <div className="jumbotron">
        <h1 className="display-3">Projet Rest Api CPF</h1>
        <hr className="my-4"></hr>

        <p className="lead">
          Application for testing REST API requests
        </p>

        <p>Backend developed in Java with Spring Boot and Frontend in React Js</p>
        <p className="lead">
        <Link to="/main" role="button">
          <button
            className="btn btn-primary btn-lg"
            type="button"
            // onClick={ () => loginUser(email) }
          >
            Let's go!
          </button>
        </Link>        
        </p>
      </div>
    </div>
    );
}

export default Welcome;
