import axios from './baseUrl';

export async function GetProduct(
  kategori,
  keyword,
  hargaTerendah,
  hargaTertinggi
) {
  return axios.get(
    `/produk/list?kategori=${kategori}&page=1&pageSize=100&keyword=${keyword}&hargaTerendah=${hargaTerendah}&hargaTertinggi=${hargaTertinggi}`
  );
}

export async function GetDetailProduct(uuid) {
  return axios.get(`/produk/detail/${uuid}`);
}
export async function TambahKeranjang(payload) {
  return axios.post(`/keranjang/tambah`, payload);
}
export async function GetKeranjang() {
  return axios.get(`/keranjang`);
}
