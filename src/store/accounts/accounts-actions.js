import { addNewAccountUrl } from "../requestParams/requestUrl";
import { setAccountsList } from "./accounts-slice";
import { getRequestOptions } from './../requestParams/requestOptions';

const getAccountsData = () => {
  return async (dispatch) => { 
    try { 
      const url = addNewAccountUrl;
      const data = await getRequestOptions(url);
      const result = data.data;
      dispatch(setAccountsList(result));     
      return;
    } catch (error) {
      console.log(error);
    }
  };
};

export default getAccountsData;
