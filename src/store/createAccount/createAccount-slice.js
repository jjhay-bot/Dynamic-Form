import { createSlice } from "@reduxjs/toolkit";

const createAccountSlice = createSlice({
  name: "createAccount",
  initialState: {
    saveResponse: '',
  },
  reducers: {
    saveResponseData(state, action) {
      console.log('SUCCESS!');
      state.saveResponse = action.payload;
    },
  },
});

export default createAccountSlice.reducer;
export const { saveResponseData } = createAccountSlice.actions;
export const createAccountState = (state) => state.createAccount;
