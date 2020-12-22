import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import deleteBtn from '../imgs/delete.png';
import editBtn from '../imgs/edit.png';

function CpfLis() {
  const { cpf } = useContext(MyContext);

  // useEffect(() => {
  //   async function fetchData() {
  //   fetchData();
  // }, []);

  return (
    (!cpf)
      ? <p>Table is empty</p>
      : (
        <table className="table-container">
          <thead className="table-head">
            <tr>
              <th>Id</th>
              <th>Nom</th>
              <th>CPF</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { cpf.map((item, index) => (
                <tr key={ index }>
                  <td>{ item.id }</td>
                  <td>{ item.name }</td>
                  <td>{ item.cpf }</td>
                  <td>
                    <button
                      className="table-button"
                      type="button"
                      data-testid="edit-btn"
                      // onClick={ () => editingItem(item.id) }
                    >
                      <img src={ editBtn } alt="edit button" width="20px" />
                    </button>
                    <button
                      className="table-button"
                      type="button"
                      data-testid="delete-btn"
                      // onClick={ () => deleteItem(item.id) }
                    >
                      <img src={ deleteBtn } alt="delete button" width="20px" />
                    </button>
                  </td>
                </tr>
              )
            )},
          </tbody>
        </table>
      )
  );
}

export default CpfLis;
