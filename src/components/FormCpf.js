import React , { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import CpfService from '../services/CpfService';

function FormCpf() {

  const { id } = useParams();
  const history = useHistory()

  const { cpf, getAllCpf } = useContext(MyContext);

  const INIT_CPF = {
    id: '',
    name: '',
    cpf: '',
  }
  const [ myCpf, setMyCpf ] = useState(INIT_CPF);

  useEffect(() => {
    if (id) {
      const cpfFiltered = cpf.filter((item) => item.id === parseInt(id));
      setMyCpf(cpfFiltered[0]);
    }
  }, []);

  function returnMainPage() {
    history.push('/main');
  }

  async  function saveCpf() {
    const service = new CpfService();
    const { id, name, cpf } = myCpf;
    const cpfToSave = { name, cpf }
    let response = '';
    if (id) {
      response = await service.updateCpf(id, cpfToSave);    
    } else {
      response = await service.saveCpf(cpfToSave);
    }

    if (response.status >= 200 && response.status <= 204) {
      alert('CPF saved!');
      getAllCpf();
      returnMainPage();
    }
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center mt-5">
        <div className="col-md-6">
          <div className="card bg-light md-6" >
            <div className="card-header">Register your CPF</div>
            <div className="card-body">
              <form>
                <fieldset>
                  <div className="form-group">
                    <label htmlFor="InputName">Name</label>
                    <input 
                      type="text"
                      className="form-control"
                      id="InputName"
                      placeholder="Enter name"
                      value={myCpf.name}
                      onChange={ (e) => setMyCpf({...myCpf, name: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputCpf">CPF</label>
                    <input
                      type="text"
                      className="form-control"
                      id="InputCpf"
                      placeholder="Enter CPF"
                      value={myCpf.cpf}
                      onChange={ (e) => setMyCpf({...myCpf, cpf: e.target.value})}
                    />
                  </div>

                  <button type="button" className="btn btn-primary mr-1" onClick={ saveCpf } >Save</button>
                  <button type="button" className="btn btn-danger" onClick={ returnMainPage } >Cancel</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormCpf;
