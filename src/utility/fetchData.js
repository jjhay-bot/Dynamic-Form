import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function FetchData(requestUrl) {
  const { data, error } = useSWR(requestUrl, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
