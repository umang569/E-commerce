import axios from 'axios';

export function getProductslist(){
  return axios.get('https://dummyjson.com/products').then(function(response){
    return response.data.products;
  });
}
export function getProductDetail(id){
  return axios.get (`https://dummyjson.com/products/`+id).then(function(response){
      return response.data;
  });
}
