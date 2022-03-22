import { configureStore } from "@reduxjs/toolkit";
import formInputSlice from "./formInput/formInput-slice";
import accountsSlice from './accounts/accounts-slice';

const store = configureStore({ 
  reducer: {  
    formInput: formInputSlice,
    accounts: accountsSlice
  },
});

export default store;