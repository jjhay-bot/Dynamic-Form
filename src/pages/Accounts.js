import { useDispatch, useSelector } from "react-redux";
import { accountsState } from "../store/accounts/accounts-slice";
import { useEffect } from "react";
import getAccountsData from "./../store/accounts/accounts-actions";
import DataTable from "../components/datatable";
import { Typography } from "@mui/material";

export default function Accounts() {
  const dispatch = useDispatch();

  const { accountsList } = useSelector(accountsState);

  useEffect(() => {
    dispatch(getAccountsData());
  }, [dispatch]);

  return (
    <div>
      <Typography sx={{ textAlign: "center" }} className="color1" variant="title" component="div">
        <h2>List of Account</h2>
      </Typography>
      <DataTable data={accountsList} />
    </div>
  );
}
