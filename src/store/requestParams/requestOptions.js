// import axios from "axios";
// import useSWR from 'swr';


// const getRequestOptions = (requestUrl) => {
//   const fetcher = (url) => axios.get(url).then((res) => res.data);

//   const { data, error } = useSWR(requestUrl, fetcher);

//   return {
//     data: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// };


// export default getRequestOptions;