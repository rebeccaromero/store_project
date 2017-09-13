import axios from 'axios';

export const FETCH_ADMINS = 'FETCH_ADMINS';
export const FETCH_ADMIN = 'FETCH_ADMIN';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';

const ROOT_URL = 'http://localhost:8000/admin'

export function fetchAdmins() {
  const request = axios.get(`${ROOT_URL}/mission_control`);

  return {
    type: FETCH_ADMINS,
    payload: request
  }
}

export function fetchUsers() {
  const request = axios.get(`${ROOT_URL}/users/`)

  return {
    type: FETCH_USERS,
    payload: request
  }
}

export function fetchProducts() {
  const request = axios.get(`${ROOT_URL}/products/`)

  return {
    type: FETCH_PRODUCTS,
    payload: request
  }
}