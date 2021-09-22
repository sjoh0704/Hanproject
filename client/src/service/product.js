export default class ProductService {
    constructor(http, socket) {
      this.http = http;
      this.socket = socket;
    }
    async getProducts(product_id) {
      let query = product_id ? `${product_id}` : '';
      // query = seller_id ?  seller_id : '';
      return this.http.fetch(`/store/${query}`, {
        method: 'GET',
      });
    }
    // async getProducts(username) {
    //   console.log(this.http.fetch(`/store`));
    //   const query = username ? `?username=${username}` : '';
    //   return Promise.all(this.http.fetch(`/store${query}`, {
    //     method: 'GET',
    //   }));
    // }
  
    async postProduct(product) {
      const {name, price, description, seller_id, fileurl} = product;
      return this.http.fetch(`/store/productadd`, {
        method: 'POST',
        body: JSON.stringify({ name, price, description, fileurl, seller_id  }),
      });
    }

    async postBuyer(product) {
      const {buyer_id,seller_id, price, id} = product;
      return this.http.fetch(`/buyer`, {
        method: 'POST',
        body: JSON.stringify({ buyer_id,seller_id, price, id  }),
      });
    }
  
    async updateProduct(product) {
      const{name, price, description, seller_id, fileurl,id, finish} = product;
      return this.http.fetch(`/store/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, price, fileurl, description, seller_id, finish  }),
      
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
      onSync(callback){
        return this.socket.onSync('products', callback);
      }
    
  
  
  }
  