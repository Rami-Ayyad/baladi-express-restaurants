import axios from "axios";

class AxiosInstance {
  constructor() {
    this.apiBaseUrl = import.meta.env.VITE_APP_BASE_URL;
    this.apikey = import.meta.env.VITE_APP_API_KEY;

    this.headers = {
      "Content-Type": "application/json",
      "x-api-key": this.apikey,
    };

    this.baseAxios = axios.create({
      baseURL: this.apiBaseUrl,
      headers: this.headers,
    });
  }
}

export default new AxiosInstance();
