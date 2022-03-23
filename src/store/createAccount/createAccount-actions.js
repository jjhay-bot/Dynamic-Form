import { saveResponseData } from "./createAccount-slice";
import { editAccountUrl } from "../requestParams/requestUrl";
import { setLoadingShow } from "../ui/loading-slice";
import { postNewAccountRequestOptions } from "../requestParams/requestOptions";
import { hideNotification, showAddRemarkFailed, showIncompleteForm, showSaveSuccess } from "../ui/notification-slice";

export const postNewAccountData = (
  enteredFirst,
  enteredLast,
  enteredEmail,
  enteredGender,
  enteredAge,
  enteredTestimonial
) => {
  return async (dispatch) => {
    dispatch(setLoadingShow(true));
    try {
      const url = editAccountUrl;
      const data = await postNewAccountRequestOptions(
        url,
        enteredFirst,
        enteredLast,
        enteredEmail,
        enteredGender,
        enteredAge,
        enteredTestimonial
      ).then((res) => res.json());
      const result = data;
      dispatch(saveResponseData(result));
      dispatch(setLoadingShow(false));
      dispatch(showSaveSuccess());
      setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
      return;
    } catch (error) {
      dispatch(setLoadingShow(false));
      dispatch(showIncompleteForm());
      setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
      console.log(error);
    }
  };
};

export default postNewAccountData;
