import axios, { syncToken } from './baseUrl';

export async function getPetugsas(
  page = 1,
  pageSize = 5
) {
  return axios.get(
    `/list/petugas`
  );
}