import axios from 'axios';
import { apiHost } from './config';

const config = {
  baseURL: apiHost,
};

const forge = (format, params = {}) =>
  Object.keys(params).reduce((prev, k) => prev.replace(`{${k}}`, params[k]), format).replace(/{\w*}/g, '');

// promiseを返す
const get = uri =>
  axios.get(uri, config)
    .then(res => res.data)
    .catch(err => window.console.log(err));

module.exports = {
  forge,
  get,
};
