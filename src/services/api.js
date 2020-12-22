const URL_BASE = 'http://localhost:8080/api/person';

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

export async function getAllCpf() {
  return fetch(URL_BASE)
    .then((response) => response.json());
}
