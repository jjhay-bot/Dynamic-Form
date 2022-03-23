import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    shownotification: false,
    shownotificationMessage: "",
  },
  reducers: {
    showServerError(state) {
      state.shownotification = true;
      state.shownotificationMessage = "Internal Server Error";
    },

    showReportSuccess(state) {
      state.shownotification = true;
      state.shownotificationMessage = "Successfully fetch data!";
    },
    showAddRemarkFailed(state) {
      state.shownotification = true;
      state.shownotificationMessage = "Error saving data";
    },

    showIncompleteForm(state) {
      state.shownotification = true;
      state.shownotificationMessage = "Please fill-up required information.";
    },

    showSaveSuccess(state) {
      state.shownotification = true;
      state.shownotificationMessage = "Successfully save data!";
    },

    showEditIssueSuccess(state) {
      state.shownotification = true;
      state.shownotificationMessage = "Updated successfully!";
    },

    hideNotification(state) {
      state.shownotification = false;
      state.shownotificationMessage = "";
    },
  },
});

export const { showServerError, showReportSuccess, showAddRemarkFailed } = notificationSlice.actions;
export const { showEditIssueSuccess, hideNotification, showSaveSuccess, showIncompleteForm } = notificationSlice.actions;
export const notificationState = (state) => state.notification;
export default notificationSlice.reducer;
