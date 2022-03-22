import { addNewAccountUrl } from "../requestParams/requestUrl";
import { getAccountsList } from "./accounts-slice";
import getRequestOptions from './../requestParams/requestOptions';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.post(url).then((res) => res.data);

const getAccountsData = (requestUrl) => {

  return async (dispatch) => {
    const request = useSWR('api/form', fetcher);
    const response = request.data

    // console.log(data);

    // try {
    //   const url = addNewAccountUrl;
    //   // const data = await getRequestOptions(url);
    //   const data = useSWR('https://vb-react-exam.netlify.app/api/form', fetcher);

    //   console.log(data);
    //   const result = data.data;
    //   dispatch(getAccountsList(result));
    //   return;
    // } catch (error) {
    //   console.log(error);
    // }
  };
};

export default getAccountsData;

// const { data, isLoading, isError } = FetchData("https://vb-react-exam.netlify.app/api/form");

// if (isLoading) return "<Spinner />";
// if (isError) return "<Error />";
