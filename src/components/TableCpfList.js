import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';
import deleteBtn from '../imgs/delete.png';
import editBtn from '../imgs/edit.png';
import CpfService from '../services/CpfService';

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
        <div className="container">
        {/* // <div className="bs-docs-section"> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <table className="table table-hover">
                  <thead>
                    <tr className="table-primary">
                      <th scope="col">ID</th>
                      <th scope="col">NAME</th>
                      <th scope="col">CPF</th>
                      <th scope="col">UPDATE - DELETE</th>
                    </tr>
                  </thead>
                  <tbody>
                    { cpf.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">{ item.id }</th>
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
          </div>
        </div>
      )
  );
}

export default CpfLis;
