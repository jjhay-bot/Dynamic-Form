import { useDispatch, useSelector } from "react-redux";
import {
  styled,
  TextField,
  Box,
  Typography,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SubmitButton from "./submitButton";
import { Grid } from "@mui/material/";

import _ from "lodash";
import {
  formInputState,
  setEnteredFirst,
  setEnteredLast,
  setEnteredEmail,
  setEnteredGender,
  setEnteredAge,
  setEnteredTestimonial,
  setEnteredOthers,
} from "../../store/formInput/formInput-slice";
import { postUpdatedAccountData } from "../../store/formInput/formInput-actions";

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
    borderColor: "#d1c4e9",

    padding: "4px !important",
  },
});

const UpdateAccount = () => {
  const dispatch = useDispatch();
  const { enteredFirst, enteredLast, enteredEmail, enteredGender } = useSelector(formInputState);
  const { enteredAge, enteredTestimonial, enteredOthers, saveResponse } = useSelector(formInputState);


  console.log('saveResponse',saveResponse );

  const setEnteredValue = (e) => {
    e.target.id === "firstName"
      ? dispatch(setEnteredFirst(e.target.value))
      : e.target.id === "lastName"
      ? dispatch(setEnteredLast(e.target.value))
      : e.target.id === "emailAddress"
      ? dispatch(setEnteredEmail(e.target.value))
      : e.target.id === "age"
      ? dispatch(setEnteredAge(e.target.value))
      : e.target.id === "testimonial"
      ? dispatch(setEnteredTestimonial(e.target.value))
      : dispatch(setEnteredOthers(e.target.value));
  };

  const accountsList = [
    enteredFirst,
    enteredLast,
    enteredEmail,
    enteredGender,
    enteredAge,
    enteredTestimonial,
    enteredOthers,
  ].filter((data) => data !== undefined);
  const showGender = accountsList.find((x) => x.fieldName === "gender");

  return (
    <Grid container justifyContent="center" alignItems="center" direction="column">
      <Grid item style={{ width: "100%" }}>
        <Typography className="color1" variant="title" component="div">
          <h2 style={{ textAlign: "center", paddingRight: "5px" }}>Update Account</h2>
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
          {accountsList
            .filter((x) => x.fieldName !== "gender")
            .map((item, index) => {
              return (
                <ValidationTextField
                  key={index}
                  // required
                  // autoComplete="true"
                  variant="outlined"
                  defaultValue={item.value}
                  id={item.fieldName}
                  label={_.startCase(item.fieldName)}
                  type={item.type}
                  onBlur={setEnteredValue}
                  style={{ width: "90%", maxWidth: "800px" }}
                  multiline={item.type === "multiline" ? true : false}
                  className={item.type === "multiline" ? "textarea" : ""}
                />
              );
            })}

          {showGender && (
            <Box sx={{ minWidth: "100%" }} style={{ display: "flex", justifyContent: "center" }}>
              <FormControl style={{ width: "90%", maxWidth: "800px" }}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={showGender.value}
                  label="Options"
                  onChange={(e) => dispatch(setEnteredGender(e.target.value))}
                  className="textarea"
                >
                  {showGender.options.map((item) => (
                    <MenuItem value={item} key={item} style={{ textAlign: "left" }}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          )}

          <SubmitButton
            endIcon={<SendIcon />}
            firstname={enteredFirst}
            lastname={enteredLast}
            email={enteredEmail}
            gender={enteredGender}
            age={enteredAge}
            testimonial={enteredTestimonial}
            message="Submit"
            onClickAction={() => dispatch(postUpdatedAccountData(accountsList))}
          />
        </Box>
      </Grid>

      {saveResponse && (
        <div style={{ width: "90%", maxWidth: "800px", margiBottom: "2rem" }}>
          <Typography className="color1" variant="body1" component="div">
            <div style={{ paddingRight: "5px" }}>Response</div>
          </Typography>
          <TextareaAutosize
            aria-label="empty textarea"
            value={JSON.stringify(saveResponse)}
            style={{ width: "100%", maxWidth: "800px", padding: "10px", boxSizing: "border-box" }}
            className="textarea"
          />
        </div>
      )}
    </Grid>
  );
};

export default UpdateAccount;
