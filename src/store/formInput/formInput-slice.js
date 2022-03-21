import { createSlice } from "@reduxjs/toolkit"

const formInputSlice = createSlice({
  name: "formInput",
  initialState: {
    formInputList: [],
    formInputValue: "",
    formInputShow: false, 
  },
  reducers: {
    getFormInputList(state, action) {
      state.formInputList = action.payload
    },
    getFormInputValue(state, action) {
      state.formInputValue = action.payload
    },
    setFormInputShow(state) {
      state.formInputShow = !state.formInputShow
    },    
  },
});

export default formInputSlice.reducer;
export const { getFormInputList,getFormInputValue,setFormInputShow } = formInputSlice.actions; 
export const formInputState = (state) => state.formInput;