import { saveResponseData } from "./createAccount-slice";
import { editAccountUrl } from "../requestParams/requestUrl";
import { setLoadingShow } from "../ui/loading-slice";
import { postNewAccountRequestOptions } from "../requestParams/requestOptions";

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
      return;
    } catch (error) {
      dispatch(setLoadingShow(false));
      console.log(error);
    }
  };
};

export default postNewAccountData;
