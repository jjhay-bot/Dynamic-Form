import { addNewAccountUrl } from "../requestParams/requestUrl";
import { setAccountsList } from "./accounts-slice";
import { getRequestOptions } from "./../requestParams/requestOptions";
import { setLoadingShow } from "../ui/loading-slice";
import { hideNotification, showReportSuccess, showSaveSuccess, showServerError } from "../ui/notification-slice";

const getAccountsData = () => {
  return async (dispatch) => {
    dispatch(setLoadingShow(true));
    try {
      const url = addNewAccountUrl;
      const data = await getRequestOptions(url);
      const result = data.data;
      dispatch(setAccountsList(result));
      dispatch(setLoadingShow(false));
      dispatch(showReportSuccess());
      setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
      return;
    } catch (error) {
      dispatch(setLoadingShow(false));
      dispatch(showServerError());
      setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
      console.log(error);
    }
  };
};

export default getAccountsData;
