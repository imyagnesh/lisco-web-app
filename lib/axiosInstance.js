import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:1337/',
  timeout: 5000,
  timeoutErrorMessage: 'Timeout.Please try after sometime',
});

export default axiosInstance;
