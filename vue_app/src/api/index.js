import axios from 'axios'

export function loginUser ({email, password}) {
  let data = {
    email: email,
    password: password
  }
  return axios.post('/auth/login', data, { request_name: 'loginUser' })
}

export function logoutUser () {
  return axios.post('/auth/logout', undefined, { request_name: 'logoutUser' })
}

export async function refreshToken () {
  return axios.get('/auth/refresh', { request_name: 'refreshToken' })
}

export function getAuthUser () { return axios.get('/auth/user') }

export const getUsers = query => {
  let params = {
    page: query.page,
    per_page: query.per_page
  }
  return axios.get('/admin/users', { params })
}

export function getUser (id) { return axios.get(`/admin/users/${id}`) }

export function createUser (id, data) { return axios.post('/admin/users', data) }

export function updateUser (id, data) { return axios.put(`/admin/users/${id}`, data) }

export function deleteUser (id) { return axios.delete(`/admin/users/${id}`) }
