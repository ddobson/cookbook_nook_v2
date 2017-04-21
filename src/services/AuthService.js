import config from '../config';
import axios from 'axios';

class AuthService {
  handleAuth(action, data) {
    const baseUrl = config[process.env.NODE_ENV];

    switch (action) {
    case 'sign-up':
      return axios.post(`${baseUrl}/sign-up`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    case 'sign-in':
      return axios.post(`${baseUrl}/sign-in`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    case 'change-pw':
      return axios.patch(`${baseUrl}/change-password/${localStorage.getItem('id')}`, data, {
        headers: {
          'Authorization': `Token token=${localStorage.getItem('token')}`
        }
      });
    case 'sign-out':
      return axios.delete(`${baseUrl}/sign-out/${localStorage.getItem('id')}`, {
        headers: {
          'Authorization': `Token token=${localStorage.getItem('token')}`
        }
      });
    }
  }
}

export default AuthService;
