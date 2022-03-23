import { useEffect } from "react";
import UpdateAccount from "./../components/form/edit";
import { useDispatch, useSelector } from "react-redux";
import { loadingState } from "../store/ui/loading-slice";
import LoadingSpinner from "../components/ui/loadingSpinner";
import getSaveAccountsData from "./../store/formInput/formInput-actions";

export default function EditAccount() {
  const { loadingShow } = useSelector(loadingState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSaveAccountsData());
    return;
  }, []);

  return loadingShow ? (
    <LoadingSpinner />
  ) : (
    <div>
      <UpdateAccount />
    </div>
  );
}
