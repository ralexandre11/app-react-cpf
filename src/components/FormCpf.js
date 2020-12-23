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

    console.log(response)
    if (response.status >= 200 && response.status <= 204) {
      alert('CPF saved!');
      getAllCpf();
      history.push('/main')
    }
  }

  return (
    <div className="container-sm">
      <div className="row">
        <div className="col-md-6">
          <div className="bs-docs-section">
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

                <button type="button" className="btn btn-primary" onClick={ saveCpf } >Save</button>
              </fieldset>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormCpf;
