// import Cookies from "js-cookie";
import axios, { syncToken } from "./baseUrl";

export async function LoginProses(payload) {
  return axios.post(`/login`, payload);
}

export async function RegisterProses(payload) {
  return axios.post(`/register`, payload);
}

export async function RegisterProsesP(payload) {
  return axios.post(`/registerp`, payload);
}

export function authMeProcess() {
  syncToken();
  return axios.get(`/authme`);
}