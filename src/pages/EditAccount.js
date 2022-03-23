import { useEffect } from "react";
import getAccountsData from "../store/accounts/accounts-actions";
import UpdateAccount from "./../components/form/edit";
import { useDispatch, useSelector } from "react-redux";
import { loadingState } from "../store/ui/loading-slice";
import LoadingSpinner from "../components/ui/loadingSpinner";
import { accountsState } from "../store/accounts/accounts-slice";

export default function EditAccount() {
  const { loadingShow } = useSelector(loadingState);
  const { accountsList } = useSelector(accountsState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccountsData());
    return;
  }, []);

  return loadingShow ? (
    <LoadingSpinner />
  ) : (
    <div>
      <UpdateAccount accountsList={accountsList}/>
    </div>
  );
}
