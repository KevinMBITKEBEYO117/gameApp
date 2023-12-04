import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b7d79ee1e0d04dd580d5dbada0244aff",
  },
});

class APIClient<T> {
  private enpoint: string;

  constructor(endpoint: string) {
    this.enpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.enpoint, config)
      .then((res) => res.data);
  };
}

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export default APIClient;
