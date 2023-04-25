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

export async function getTransactions(headers) {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = axios.get(`${URL}/transactions`, config);
    return res;
  } catch (err) {
    return err.res;
  }
}

export async function postTransaction(body, type) {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = axios.post(`${URL}/transactions/${type}`, body, config);
    return res;
  } catch (err) {
    return err.res;
  }
}
