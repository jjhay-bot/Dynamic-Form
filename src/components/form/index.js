import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled, TextField, Box, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SubmitButton from "./submitButton";
import { Grid } from "@mui/material/";
import getAccountsData from "./../../store/accounts/accounts-actions";
import { accountsState } from "./../../store/accounts/accounts-slice";

const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "#d1c4e9",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "#ffccbc",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important",
  },
});

const Form = () => {
  const [enteredFirst, setEnteredFirst] = useState("");
  const [enteredLast, setEnteredLast] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredGender, setEenteredGender] = useState("");
  const [enteredAge, setEenteredAge] = useState("");
  const [enteredTestimonial, setEenteredTestimonial] = useState("");

  const dispatch = useDispatch();

  const submitHandler = async (firstname, lastname, email, gender, age, testimonial) => {
    // dispatch(await LoginRequest(enterUserName, enterPassword));
  };

  const { accountsList } = useSelector(accountsState);
  console.log("accountsList", accountsList);
  useEffect(() => {
    dispatch(getAccountsData());
  }, [dispatch]);

  return (
    <Grid container justifyContent="center" alignItems="center" direction="column">
      <Grid item style={{ width: "100%" }}>
        <Typography className="color1" variant="title" component="div">
          <h2 style={{ textAlign: "center" }}>New Account</h2>
        </Typography>

        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            justifyItems: "center",
            gridTemplateColumns: { sm: "1fr" },
            gap: 2,
            marginY: 1,
            marginX: "auto",
          }}
        >
          <ValidationTextField
            required
            autoComplete="true"
            // autoFocus
            variant="outlined"
            defaultValue={enteredFirst}
            id="validation-outlined-input"
            label="First Name"
            type="text"
            onBlur={(e) => setEnteredFirst(e.target.value)}
            style={{ width: "90%", maxWidth: "800px" }}
          />

          <ValidationTextField
            required
            autoComplete="true"
            // autoFocus
            variant="outlined"
            defaultValue={enteredLast}
            id="validation-outlined-input"
            label="Last Name"
            type="text"
            onBlur={(e) => setEnteredLast(e.target.value)}
            style={{ width: "90%", maxWidth: "800px" }}
          />

          <ValidationTextField
            required
            autoComplete="true"
            // autoFocus
            variant="outlined"
            defaultValue={enteredEmail}
            id="validation-outlined-input"
            label="Email Address"
            type="email"
            onBlur={(e) => setEnteredEmail(e.target.value)}
            style={{ width: "90%", maxWidth: "800px" }}
          />

          <ValidationTextField
            // required
            autoComplete="true"
            variant="outlined"
            defaultValue={enteredGender}
            id="validation-outlined-input"
            label="Gender"
            type="text"
            onBlur={(e) => setEenteredGender(e.target.value)}
            style={{ width: "90%", maxWidth: "800px" }}
          />

          <ValidationTextField
            // required
            autoComplete="true"
            variant="outlined"
            defaultValue={enteredAge}
            id="validation-outlined-input"
            label="Age"
            type="number"
            onBlur={(e) => setEenteredAge(e.target.value)}
            style={{ width: "90%", maxWidth: "800px" }}
          />

          <ValidationTextField
            // required
            autoComplete="true"
            variant="outlined"
            defaultValue={enteredTestimonial}
            id="validation-outlined-input"
            label="Testimonial(optional)"
            type="text"
            multiline
            rows={4}
            onBlur={(e) => setEenteredTestimonial(e.target.value)}
            style={{ width: "90%", maxWidth: "800px", outline: 'auto #d1c4e9' }}
          />

          <SubmitButton
            endIcon={<SendIcon />}
            firstname={enteredFirst}
            lastname={enteredLast}
            email={enteredEmail}
            gender={enteredGender}
            age={enteredAge}
            testimonial={enteredTestimonial}
            message="Submit"
            onClickAction={() => submitHandler()}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Form;
