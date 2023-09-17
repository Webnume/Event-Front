import { useState, useEffect } from "react";
import axios from "axios";

// interface EventProps {
//     id: number;
//     title: string;
//     description: string;
//     state: string;
//     price: string;
//     tickets: number;
//     startAt: string;
//     endAt: string;
//     image: { url: string };
//     remainingTickets: number;
//     numberOfParticipants: number;
//   }

const useAxiosFetch = (dataUrl: string) => {
  const [data, setData] = useState<any[]>([]);
  const [fetchError, setFetchError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url: string) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err: any) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(dataUrl);

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
