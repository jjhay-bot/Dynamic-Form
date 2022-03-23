import { createSlice } from "@reduxjs/toolkit"

const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    accountsList: [],
    accountsValue: "",
    accountsShow: false, 
  },
  reducers: {
    setAccountsList(state, action) {
      state.accountsList = action.payload
    },
    setAccountsValue(state, action) {
      state.accountsValue = action.payload
    },
    setAccountsShow(state) {
      state.accountsShow = !state.accountsShow
    },    
  },
});

export default accountsSlice.reducer;
export const { setAccountsList,setAccountsValue,setAccountsShow } = accountsSlice.actions; 
export const accountsState = (state) => state.accounts;