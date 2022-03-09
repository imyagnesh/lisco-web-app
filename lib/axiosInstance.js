import axios from 'axios';
import { getSession } from 'next-auth/react';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT),
  timeoutErrorMessage: 'Timeout.Please try after sometime',
});

axiosInstance.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    const session = await getSession();
    console.log('interceptors session', session);
    if (session) {
      config.headers.Authorization = `Bearer ${session.jwt}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
