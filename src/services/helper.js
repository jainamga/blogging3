import axios from "axios";

export const BASE_URL='https://login-production-e2c3.up.railway.app';
export const myAxios=axios.create({baseURL:BASE_URL});