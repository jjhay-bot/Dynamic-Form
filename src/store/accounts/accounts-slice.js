import { createSlice } from "@reduxjs/toolkit"

const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    accountsList: [],
    accountsValue: "",
    accountsShow: false, 
  },
  reducers: {
    getAccountsList(state, action) {
      state.accountsList = action.payload
    },
    getAccountsValue(state, action) {
      state.accountsValue = action.payload
    },
    setAccountsShow(state) {
      state.accountsShow = !state.accountsShow
    },    
  },
});

export default accountsSlice.reducer;
export const { getAccountsList,getAccountsValue,setAccountsShow } = accountsSlice.actions; 
export const accountsState = (state) => state.accounts;