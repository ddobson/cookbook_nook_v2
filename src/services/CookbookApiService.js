import axios from 'axios';
import config from '../config';

class CookbookApiService {
  constructor() {
    this.baseUrl = config[process.env.NODE_ENV];
    this.getAndDeleteHeaders = {
      'Authorization': `Token token=${localStorage.getItem('token')}`
    };
    this.postAndPatchHeaders = {
      'Authorization': `Token token=${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    };
  }

  getCookbooks() {
    return axios.get(`${this.baseUrl}/cookbooks`, {
      headers: this.getAndDeleteHeaders
    });
  }

  getCookbook(id) {
    return axios.get(`${this.baseUrl}/cookbooks/${id}`, {
      headers: this.getAndDeleteHeaders
    });
  }

  createCookbook(data) {
    return axios.post(`${this.baseUrl}/cookbooks`, data, {
      headers: this.postAndPatchHeaders
    });
  }

  updateCookbook(id, data) {
    return axios.patch(`${this.baseUrl}/cookbooks/${id}`, data, {
      headers: this.postAndPatchHeaders
    });
  }

  destroyCookbook(id) {
    return axios.delete(`${this.baseUrl}/cookbooks/${id}`, {
      headers: this.getAndDeleteHeaders
    });
  }

  createRecipe(id, data) {
    return axios.post(`${this.baseUrl}/cookbooks/${id}/recipes`, data, {
      headers: this.postAndPatchHeaders
    });
  }

  getRecipe(id) {
    return axios.get(`${this.baseUrl}/recipes/${id}`, {
      headers: this.getAndDeleteHeaders
    });
  }

  updateRecipe(id, data) {
    return axios.patch(`${this.baseUrl}/recipes/${id}`, data, {
      headers: this.postAndPatchHeaders
    });
  }

  destroyRecipe(id) {
    return axios.delete(`${this.baseUrl}/recipes/${id}`, {
      headers: this.getAndDeleteHeaders
    });
  }
}

export default CookbookApiService;
