import { addNewAccountUrl, editAccountUrl } from "../requestParams/requestUrl";
import { getRequestOptions, postRequestOptions } from "../requestParams/requestOptions";
import { setLoadingShow } from "../ui/loading-slice";
import { setDefault, saveResponseData } from "./formInput-slice";
import { hideNotification, showAddRemarkFailed, showEditIssueSuccess, showIncompleteForm, showSaveSuccess } from "../ui/notification-slice";

const getSaveAccountsData = () => {
  return async (dispatch) => {
    dispatch(setLoadingShow(true));
    try {
      const url = addNewAccountUrl;
      const data = await getRequestOptions(url);
      const result = data.data;
      dispatch(showSaveSuccess());
      setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
      dispatch(setDefault(result));
      dispatch(setLoadingShow(false));
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

export const postUpdatedAccountData = (accountsList) => {
  let firstName = accountsList.find((x) => x.fieldName === "firstName")
    ? accountsList.find((x) => x.fieldName === "firstName").value
    : "";
  let lastName = accountsList.find((x) => x.fieldName === "lastName")
    ? accountsList.find((x) => x.fieldName === "lastName").value
    : "";
  let emailAddress = accountsList.find((x) => x.fieldName === "emailAddress")
    ? accountsList.find((x) => x.fieldName === "emailAddress").value
    : "";
  let gender = accountsList.find((x) => x.fieldName === "gender")
    ? accountsList.find((x) => x.fieldName === "gender").value
    : "";
  let age = accountsList.find((x) => x.fieldName === "age")
    ? accountsList.find((x) => x.fieldName === "age").value
    : "";
  let testimonial = accountsList.find((x) => x.fieldName === "testimonial")
    ? accountsList.find((x) => x.fieldName === "testimonial").value
    : "";
  let others = accountsList.find(
    (x) =>
      x.fieldName !== "firstName" &&
      x.fieldName !== "lastName" &&
      x.fieldName !== "emailAddress" &&
      x.fieldName !== "gender" &&
      x.fieldName !== "age"
  );
  let othersKey = others.fieldName;
  let othersValue = others.value;

  return async (dispatch) => {
    dispatch(setLoadingShow(true));
    try {
      const url = editAccountUrl;
      const data = await postRequestOptions(
        url,
        firstName,
        lastName,
        emailAddress,
        gender,
        age,
        testimonial,
        othersKey,
        othersValue
      ).then((res) => res.json());
      const result = data;
      dispatch(showEditIssueSuccess(result));
      dispatch(saveResponseData(result))
      dispatch(setLoadingShow(false));
      return;
    } catch (error) {
      dispatch(setLoadingShow(false));
      dispatch(showAddRemarkFailed());
      setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
      console.log(error);
    }
  };
};

export default getSaveAccountsData;
