import { addNewAccountUrl } from "../requestParams/requestUrl";
import { setAccountsList } from "./accounts-slice";
import { getRequestOptions } from "./../requestParams/requestOptions";
import { setLoadingShow } from "../ui/loading-slice";

const getAccountsData = () => {
  return async (dispatch) => {
    dispatch(setLoadingShow(true))
    try {
      const url = addNewAccountUrl;
      const data = await getRequestOptions(url);
      const result = data.data;
      dispatch(setAccountsList(result));
      dispatch(setLoadingShow(false))
      return;
    } catch (error) {
      dispatch(setLoadingShow(false))
      console.log(error);
    }
  };
};

export default getAccountsData;
