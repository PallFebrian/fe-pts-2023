import { TambahKeranjang } from '../../API/produk';

export function actionKeranjang(payload) {
  return async (dispatch) => {
    try {
      let response = await TambahKeranjang(payload);
      let data = response;
      return data;
    } catch (err) {
      console.log('err keranjang', err);
      return err;
    }
  };
}
