import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';
import deleteBtn from '../imgs/delete.png';
import editBtn from '../imgs/edit.png';
import CpfService from '../services/CpfService';

import logo from '../imgs/logo.png';

function CpfLis() {
  const { cpf, getAllCpf } = useContext(MyContext);

  // useEffect(() => {
  // }, []);

  async function deleteCpf(id) {
    const service = new CpfService();
    const response = await service.deleteCpf(id);    
    console.log(response);
    if (response.status === 204) {
      alert('CPF deleted!');
      getAllCpf();
    }
  }

  return (
    (!cpf)
      ? <p>Table is empty</p>
      : (
        <div className="cpf-list">
          <div className="container">
            <div className="page-header" id="banner">
              <div className="row">
                <div className="col-lg-8 col-md-7 col-sm-6">
                  <h2>Project Rest Api CPF</h2>
                  <p className="lead">List of CPF Numbers</p>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="sponsor align-right">
                    <img className='logo-spring-react' src={ logo } alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div>
            <table className="table-container">
              <thead className="table-head">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>CPF</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { cpf.map((item, index) => (
                    <tr key={index}>
                      <td>{ item.id }</td>
                      <td>{ item.name }</td>
                      <td>{ item.cpf }</td>
                      <td>
                        <Link to={`/cpf/${item.id}/edit`} role="button">
                          <button
                            className="table-button"
                            type="button"
                            // onClick={ () => editingItem( item.id ) }
                          >
                            <img src={ editBtn } alt="edit button" width="20px" />
                          </button>
                        </Link>
                        
                        <button
                          className="table-button"
                          type="button"
                          onClick={ () => deleteCpf( item.id ) }
                        >
                          <img src={ deleteBtn } alt="delete button" width="20px" />
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>        
        </div>
      )
  );
}

export default CpfLis;
