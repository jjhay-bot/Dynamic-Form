import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputLabel, Select, MenuItem, TextareaAutosize } from "@mui/material";
import { styled, TextField, Box, Typography, FormControl } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SubmitButton from "./submitButton";
import { Grid } from "@mui/material/";
import { postNewAccountData } from "./../../store/createAccount/createAccount-actions";
import { createAccountState } from "./../../store/createAccount/createAccount-slice";
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
  const [enteredGender, setEnteredGender] = useState("male");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredTestimonial, setEnteredTestimonial] = useState("");

  const dispatch = useDispatch();
  const { saveResponse } = useSelector(createAccountState);

  console.log(saveResponse);

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

          <Box sx={{ minWidth: "100%" }} style={{ display: "flex", justifyContent: "center" }}>
            <FormControl style={{ width: "90%", maxWidth: "800px" }}>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={enteredGender}
                label="Options"
                onChange={(e) => setEnteredGender(e.target.value)}
                className="textarea"
              >
                {["male", "female", "others"].map((item) => (
                  <MenuItem value={item} key={item} style={{ textAlign: "left" }}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <ValidationTextField
            // required
            autoComplete="true"
            variant="outlined"
            defaultValue={enteredAge}
            id="validation-outlined-input"
            label="Age"
            type="number"
            onBlur={(e) => setEnteredAge(e.target.value)}
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
            onBlur={(e) => setEnteredTestimonial(e.target.value)}
            style={{ width: "90%", maxWidth: "800px", outline: "auto #d1c4e9" }}
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
            onClickAction={() =>
              dispatch(
                postNewAccountData(
                  enteredFirst,
                  enteredLast,
                  enteredEmail,
                  enteredGender,
                  enteredAge,
                  enteredTestimonial
                )
              )
            }
          />

          {saveResponse && (
            <div style={{ width: "90%", maxWidth: "800px", margiBottom: "2rem" }}>
              <Typography className="color1" variant="body1" component="div">
                <div style={{ paddingRight: "5px" }}>Response</div>
              </Typography>
              <TextareaAutosize
                aria-label="empty textarea"
                value={JSON.stringify(saveResponse)}
                className="textarea"
                style={{ width: "100%", maxWidth: "800px", padding: "10px", boxSizing: "border-box" }}
              />
            </div>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Form;
