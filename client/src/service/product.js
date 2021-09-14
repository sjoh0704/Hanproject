export default class ProductService {
    constructor(http) {
      this.http = http;
    }
    async getProducts(id) {
      const query = id ? `${id}` : '';
      return this.http.fetch(`/store/${query}`, {
        method: 'GET',
      });
    }
    // async getProducts(username) {
    //   console.log(this.http.fetch(`/store`));
    //   const query = username ? `?username=${username}` : '';
    //   return Promise.all(this.http.fetch(`/store${query}`, {
    //     method: 'GET',
    //     headers: this.getHeaders(),
    //   }));
    // }
  
    async postProduct(text) {
      return this.http.fetch(`/store`, {
        method: 'POST',
        body: JSON.stringify({ text, username: 'seonghoon', name: 'Seonghoon' }),
      });
    }
  
    async removeProduct(productId) {
      return this.http.fetch(`/store/${productId}`, {
        method: 'DELETE',
      });
    }
  
    async plusProduct(productId) {
      return this.http.fetch(`/store/${productId}`, {
        method: 'PUT',
      });
    }
  
  
  }
  