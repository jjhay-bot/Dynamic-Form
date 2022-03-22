import { useDispatch, useSelector } from "react-redux";
import { accountsState } from "../store/accounts/accounts-slice";
import getAccountsData from "./../store/accounts/accounts-actions";
import useSWR from "swr";
import axios from "axios";
import FetchData from "./../utility/fetchData";
import { useEffect } from "react";

export default function Accounts() {
  const dispatch = useDispatch();

  const { accountsList, accountsValue, accountsShow } = useSelector(accountsState);
  
  const request = FetchData('https://vb-react-exam.netlify.app/api/form')

  useEffect(() => {
    console.log("accountsList", accountsList);
  }, [accountsList]);

  return (
    <div>
      <h2>Accounts</h2>
      <button onClick={() => console.log(request.data)}>Get Accounts</button>
    </div>
  );
}
