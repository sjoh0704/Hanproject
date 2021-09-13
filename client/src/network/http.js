export default class HttpClient {
    constructor(baseURL) {
      this.baseURL = baseURL;
    }
  
    async fetch(url, options) {
      const res = await fetch(`${this.baseURL}${url}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('res',res);
      let data;
      
      try {
        data = await res.json();
      } catch (error) {
        console.error(error);
      }
      console.log('data',data);
      if (res.status > 299 || res.status < 200) {
        const message =
          data && data.message ? data.message : 'Something went wrong! 🤪';
        const error = new Error(message);
        if(res.status === 401) {
            this.authErrorEventBus.notify(error);
            return;
        }

        throw error;
      }
      console.log('data',data);
      return data;

    }
  }
  