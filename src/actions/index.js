import axios from 'axios';

export const FETCH_ADMINS = 'FETCH_ADMINS';
export const FETCH_ADMIN = 'FETCH_ADMIN';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT = 'LOGOUT';
export const REGISTER_USER = 'REGISTER_USER';

const ROOT_URL = 'http://localhost:8000/admin'

export const statuses = {
  LOGGED_IN: 'LOGGED_IN',
  LOGGED_OUT: 'LOGGED_OUT'
}

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

export function fetchUser() {
  const request = axios.get(`${ROOT_URL}/users/`)

  return {
    type: FETCH_USER,
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

export function loginUser(email) {
  console.log('LOGGING IN')
  return {
    type: LOGIN_USER,
    payload: email,
    status: statuses.LOGGED_IN
  }
}

export function logout() {
  console.log('LOGGING OUT')
  return {
    type: LOGOUT,
    status: statuses.LOGGED_OUT
  }
}

export function createUser(values) {
  return {
    type: REGISTER_USER,
    status: statuses.LOGGED_IN
  }
}