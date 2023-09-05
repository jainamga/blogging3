import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8087/api/test/';

const API_URL2 = 'http://localhost:8087/home/';



class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

  getAllusers(){
    return axios.get(API_URL2 + 'users', { headers: authHeader() });
  }
}

export default new UserService();