import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "/api/usuario",
});

// -> Export nombrado:
export function setUserAuth(token) {
  if (token) api.defaults.headers.common.Authorization = `Bearer ${token}`;
  else delete api.defaults.headers.common.Authorization;
}

// -> Export nombrado:
export function me() {
  return api.get("/me");
}

// -> Export por defecto:
export default {
  setUserAuth,
  me,
};

