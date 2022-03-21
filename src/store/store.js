import { configureStore } from "@reduxjs/toolkit";
import formInputSlice from "./formInput/formInput-slice";

const store = configureStore({ 
  reducer: {  
    formInput: formInputSlice,
  },
});

export default store;