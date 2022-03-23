import { useDispatch, useSelector } from "react-redux";
import { accountsState } from "../store/accounts/accounts-slice";
import { useEffect , useState} from "react";
import getAccountsData from "./../store/accounts/accounts-actions";
import DataTable from "../components/datatable";
import { Typography } from "@mui/material";
import LoadingSpinner from './../components/ui/loadingSpinner';
import { loadingState } from "./../store/ui/loading-slice";

export default function Accounts() {
  const dispatch = useDispatch();

  const { accountsList } = useSelector(accountsState);
  const { loadingShow } = useSelector(loadingState);

  console.log(loadingShow);

  useEffect(() => {
    dispatch(getAccountsData());
    return 
  }, []);

  

  return (
    loadingShow ? <LoadingSpinner/> :
    <div >
      <Typography sx={{ textAlign: "center" }} className="color1" variant="title" component="div">
        <h2>List of Account</h2>
      </Typography>
      <DataTable data={accountsList} />
    </div>
  );
}
