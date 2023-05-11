import { useState, useEffect } from "react";
import axios from "axios";

type AxiosParams = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
};

axios.defaults.baseURL = "http://localhost:3000";

export const useAxios = (axiosParams: AxiosParams) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response, error, loading } as const;
};
