

import axios, { syncToken } from './baseUrl';


export async function getBarang(

  page = 1,
  pageSize = 3
) {
  return axios.get(
    `/list/barang`
  );
}
export async function tambahBarang(payload) {
  return axios.post(`/create/barang`, payload)
}
export async function deleteBarang(id) {
  return axios.delete(`/delete/barang/${id}`)
}