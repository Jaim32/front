// src/api/apiArchive.js
import axios from 'axios';

const API_BACK = import.meta.env.VITE_API_URL || 'http://18.226.28.149:8082';

const client = axios.create({
  baseURL: API_BACK + '/api',  // apuntas directo a tu backend
});

// setea token en este cliente:
export function configure(token) {
  if (token) client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete client.defaults.headers.common['Authorization'];
}

export default {
  configure,
  getArchive(userId, fecha) {
    return client.get('/daily/snapshot', { params: { usuarioId: userId, fecha } });
  },
};
