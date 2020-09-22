import axios from "axios";

const headers = {
  "Content-type": "application/json",
};
const baseUrl = "http://kaboom.rksv.net/";
const API = axios.create({
  baseURL: baseUrl,
  headers,
});

const callList = [];

const toggleIndicator = (url, type) => {
  if (type) {
    callList.push(`${baseUrl}/${url}`);
    document.querySelector(".showLoader").style.display = "flex";
  }

  if (!type) {
    const index = callList.indexOf(`${baseUrl}/${url}`);
    if (index !== -1) {
      callList.splice(index, 1);
    }
    if (callList.length === 0) {
      document.querySelector(".showLoader").style.display = "none";
    }
  }
};

API.interceptors.request.use(
  (config) => {
    toggleIndicator(config.url, true);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    toggleIndicator(response.config.url, false);
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  }
);

export default API;
