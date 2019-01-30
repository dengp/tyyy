import axios from 'axios';
const requestUrl = {

};
const request = (params) => {
  if (params.method === 'get') {
    params.params = params.data;
    delete params.data;
  }
  return axios(params);
};
export {
  requestUrl,
  request
};
