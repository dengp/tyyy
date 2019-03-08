import axios from 'axios';
import qs from 'qs';
const requestUrl = {

};
const request = (params) => {
  if (params.method === 'get') {
    params.params = params.data;
    delete params.data;
    return axios(params);
  } else {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    return axios.post(params.url, qs.stringify(params.data));
  }
  
};
export {
  requestUrl,
  request
};
