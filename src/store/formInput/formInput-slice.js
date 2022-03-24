import { createSlice } from "@reduxjs/toolkit";

const formInputSlice = createSlice({
  name: "formInput",
  initialState: {
    enteredFirst: "",
    enteredLast: "",
    enteredEmail: "",
    enteredGender: "",
    enteredAge: "",
    enteredTestimonial: "",
    enteredOthers: "",
    saveResponse: "",
  },

  reducers: {
    setEnteredFirst(state, action) {
      const setNewValue = (state, action) => {
        let current = state.enteredFirst;
        current.value = action.payload;
        return current;
      };
      state.enteredFirst = setNewValue(state, action);
    },
    setEnteredLast(state, action) {
      const setNewValue = (state, action) => {
        let current = state.enteredLast;
        current.value = action.payload;
        return current;
      };
      state.enteredLast = setNewValue(state, action);
    },
    setEnteredEmail(state, action) {
      const setNewValue = (state, action) => {
        let current = state.enteredEmail;
        current.value = action.payload;
        return current;
      };
      state.enteredEmail = setNewValue(state, action);
    },
    setEnteredGender(state, action) {
      const setNewValue = (state, action) => {
        let current = state.enteredGender;
        current.value = action.payload;
        return current;
      };
      state.enteredGender = setNewValue(state, action);
    },
    setEnteredAge(state, action) {
      const setNewValue = (state, action) => {
        let current = state.enteredAge;
        current.value = action.payload;
        return current;
      };
      state.enteredAge = setNewValue(state, action);
    },
    setEnteredTestimonial(state, action) {
      const setNewValue = (state, action) => {
        let current = state.enteredTestimonial;
        current.value = action.payload;
        return current;
      };
      state.enteredTestimonial = setNewValue(state, action);
    },
    setEnteredOthers(state, action) {
      const setNewValue = (state, action) => {
        let current = state.enteredOthers;
        current.value = action.payload;
        return current;
      };
      state.enteredOthers = setNewValue(state, action);
    },
    setDefault(state, action) {
      const others = action.payload.find(
        (x) =>
          x.fieldName !== "firstName" &&
          x.fieldName !== "lastName" &&
          x.fieldName !== "emailAddress" &&
          x.fieldName !== "gender" &&
          x.fieldName !== "age"
      );
      state.enteredFirst = Object.values(action.payload).find((x) => x.fieldName === "firstName");
      state.enteredLast = Object.values(action.payload).find((x) => x.fieldName === "lastName");
      state.enteredEmail = Object.values(action.payload).find((x) => x.fieldName === "emailAddress");
      state.enteredGender = Object.values(action.payload).find((x) => x.fieldName === "gender");
      state.enteredAge = Object.values(action.payload).find((x) => x.fieldName === "age");
      state.enteredTestimonial = Object.values(action.payload).find((x) => x.fieldName === x.testimonial);
      state.enteredOthers = others;
    },
    saveResponseData(state, action) {
      state.saveResponse = action.payload;
    },
  },
});

export default formInputSlice.reducer;
export const { setEnteredFirst, setEnteredLast, setEnteredEmail, setEnteredGender } = formInputSlice.actions;
export const { setEnteredAge, setEnteredTestimonial, setEnteredOthers, setDefault, saveResponseData } =
  formInputSlice.actions;
export const formInputState = (state) => state.formInput;
