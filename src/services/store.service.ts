import  axios from 'axios';

export class StoreService {
  url = 'https://api.bestbuy.com/';
  apiKey = 'sbKvLU36klQmnvKrC5IcOEbh';

  
  // search functions here

  searchData(title: string):Promise<any> {
    return axios({url: `${this.url}v1/products(search=${encodeURI(title)})?format=json&show=sku,name,salePrice&apiKey=${this.apiKey}`, method: 'get'}).then(results => {
      console.log(results);
      return results.data;
    });
  }

  getDetails(id: string):Promise<any> {
    return axios({url:`${this.url}v1/products/${id}.json?apiKey=${this.apiKey}`, method:'get'}).then(results => {
      console.log(results);
      return results.data;
    });;
  }


}
