import Cookies from 'js-cookie';
import {
  LoginProses,
  RegisterProses,
  authMeProcess,
  RegisterProsesP,
} from '../../api/authApi';
import { updateBarang } from '../../api/barangApi';

export function actionUpdateBarang(id, payload) {
  return async (dispatch) => {
    try {
      let response = await updateBarang(id, payload);
      console.log('ction =>', response);
      return response;
    } catch (err) {
      console.log('auth error =>', err);
      return err;
    }
  };
}
