import axios from "axios";

const URL = process.env.REACT_APP_BASE_URL;

export async function register(body) {
  try {
    const res = axios.post(`${URL}/register`, body);
    return res;
  } catch (err) {
    return err.res;
  }
}

export async function login(body) {
  try {
    const res = axios.post(`${URL}/login`, body);
    return res;
  } catch (err) {
    return err.res;
  }
}
