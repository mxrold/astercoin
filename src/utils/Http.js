class Http {
    static instance = new Http();
  
    get = async (url) => {
      try {
        const request = await fetch(url);
        const json = await request.json();
        return json;
      } catch (err) {
        console.error('HTTP GET Error: ', err);
      }
    };
  
    post = async (url, body) => {
      try {
        const request = await fetch(url, {
          method: 'POST',
          body,
        });
        const json = await request.json();
        return json;
      } catch (err) {
        console.error('HTTP POST Error: ', err);
        throw Error(err);
      }
    };
}
  
  export default Http