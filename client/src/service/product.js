export default class ProductService {
    constructor(http) {
      this.http = http;
    }
    async getProducts(product_id, seller_id) {
      let query = product_id ? `${product_id}` : '';
      query = seller_id ? `${seller_id}` : query;
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
  
    async postProduct(product) {
      const {name, price, description, seller_id, fileurl} = product;
      return this.http.fetch(`/store/productadd`, {
        method: 'POST',
        body: JSON.stringify({ name, price, description, fileurl, seller_id  }),
      });
    }
  
    async updateProduct(product) {
      const{name, price, description, seller_id, id} = product;
      return this.http.fetch(`/store/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, price, description, seller_id  }),
      
      });
    }

    async removeProduct(productId) {
      return this.http.fetch(`/store/${productId}`, {
        method: 'DELETE',
      });
    }
  
    async plusProduct(productId, buyer_id) {
      return this.http.fetch(`/store/plus/${productId}`, {
        method: 'PUT',
        body: JSON.stringify({buyer_id : 5})
      });
    }
  
  
  }
  