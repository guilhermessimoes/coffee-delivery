import axios from 'axios';

export async function getCep(cepNumero: string) {
  return axios.get(`https://viacep.com.br/ws/${cepNumero}/json/`).catch(event => console.log(event))
}