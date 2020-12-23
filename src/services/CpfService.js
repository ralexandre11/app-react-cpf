import ApiService from './ApiService';

class CpfService extends ApiService {

  constructor() {
    super('/api/person')
  }

  saveCpf(param) {
    return this.post('/', param);
  }

  updateCpf(id, param) {
    return this.put(`/${id}`, param);
  }

  deleteCpf(id) {
    return this.delete(`/${id}`);
  }

  filter(cpf) {
    let paramsFilter = '';
    if (cpf) {
      paramsFilter = `?cpf=${cpf}`
    }

    return this.get(paramsFilter);
  }
}

export default CpfService;