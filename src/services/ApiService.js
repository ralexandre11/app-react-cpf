import axios from "axios";

const httpClient = axios.create({
  baseURL: 'http://localhost:8080'
})

class ApiService {

  constructor(apiUrl){
    this.apiUrl = apiUrl;
  }

  getUrl(url) {
      return `${this.apiUrl}${url}`;
  }

  post(url,objeto){
    return httpClient.post(this.getUrl(url),objeto);
  }

  put(url,objeto){
      return httpClient.put(this.getUrl(url),objeto);
  }

  delete(url){
      return httpClient.delete(this.getUrl(url));
  }

  get(url){
      return httpClient.get(this.getUrl(url));
  }

}

export default ApiService

// export async function getAllCpfApi() {
//   return fetch(URL_BASE)
//     .then((response) => response.json());
// }

// export async function deleteCpfApi(id) {
//   const endPoint = `${URL_BASE}/${id}`;
//   const deleteMethod = {
//     method: 'DELETE',
//     headers: {'Content-type': 'application/json; charset=UTF-8'},
//   };
//   fetch(endPoint, deleteMethod) 
//     // .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(err => console.log(err));
// }

// const myHeaders = new Headers({
//   "Content-Type": "application/json;charset=utf-8",
//   "Access-Control-Allow-Origin": '*',
//   // "Access-Control-Allow-Origin": "http://localhost"
// });

// var myInit = { method: 'GET',
//                headers: myHeaders,
//                mode: 'cors',
//                cache: 'default' };

// export async function getAllCpf() {
//   return fetch(URL_BASE, myInit)
//     .then(response => response.json());
//   }

// export async function getAllCpf() {
//   const response = await fetch(`${URL_BASE}`);
//   console.log("response", response);
//   const result = await response.json();
//   console.log("resultApi", result);
//   return result;
// }

// // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// const targetUrl = 'http://localhost:8080/api/person';

