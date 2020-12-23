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
      )
  );
}

export default CpfLis;
