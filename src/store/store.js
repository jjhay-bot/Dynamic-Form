import { configureStore } from "@reduxjs/toolkit";
import formInputSlice from "./formInput/formInput-slice";
import accountsSlice from './accounts/accounts-slice';
import loadingSlice from './ui/loading-slice';
import createAccountSlice from './createAccount/createAccount-slice';

const store = configureStore({ 
  reducer: {  
    formInput: formInputSlice,
    accounts: accountsSlice,
    loading: loadingSlice,
    createAccount: createAccountSlice,
  },
});

export default store;