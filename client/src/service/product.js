export default class ProductService {
    constructor(http) {
      this.http = http;
    }
    async getProducts(username) {
      const query = username ? `?username=${username}` : '';
      return this.http.fetch(`/store${query}`, {
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
  
    async deleteProduct(productId) {
      return this.http.fetch(`/store/${productId}`, {
        method: 'DELETE',
      });
    }
  
    async updateProduct(productId, text) {
      return this.http.fetch(`/store/${productId}`, {
        method: 'PUT',
        body: JSON.stringify({ text }),
      });
    }
  
  
  }
  