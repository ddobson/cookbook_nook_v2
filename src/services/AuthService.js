import config from '../config';

class AuthService {
  handleAuth(action, data) {
    const baseUrl = config[process.env.NODE_ENV];
    const headers = new Headers();

    if (data) {
      data = JSON.stringify(data);
    }

    switch (action) {
    case 'sign-up':
      headers.append('Content-Type', 'application/json');
      return fetch(`${baseUrl}/sign-up`, {
        method: 'POST',
        headers: headers,
        body: data
      });
    case 'sign-in':
      headers.append('Content-Type', 'application/json');
      return fetch(`${baseUrl}/sign-in`, {
        method: 'POST',
        headers: headers,
        body: data
      });
    case 'change-pw':
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', `Token token=${localStorage.getItem('token')}`);
      return fetch(`${baseUrl}/change-password/${localStorage.getItem('id')}`, {
        method: 'PATCH',
        headers: headers,
        body: data
      });
    case 'sign-out':
      headers.append('Authorization', `Token token=${localStorage.getItem('token')}`);
      return fetch(`${baseUrl}/sign-out/${localStorage.getItem('id')}`, {
        method: 'DELETE',
        headers: headers,
      });
    }
  }
}

export default AuthService;
