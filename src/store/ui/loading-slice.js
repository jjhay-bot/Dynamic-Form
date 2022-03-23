import { createSlice } from "@reduxjs/toolkit"

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loadingShow: false, 
  },
  reducers: {
    setLoadingShow(state, action) {
      state.loadingShow = action.payload
    },    
  },
});

export default loadingSlice.reducer;
export const { setLoadingShow } = loadingSlice.actions; 
export const loadingState = (state) => state.loading;