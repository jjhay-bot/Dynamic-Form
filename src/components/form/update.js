import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled, TextField, Box, Typography, FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SubmitButton from "./submitButton";
import { Grid } from "@mui/material/";
import getAccountsData from "./../../store/accounts/accounts-actions";
import { accountsState } from "../../store/accounts/accounts-slice";
import _ from "lodash";

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
  const [enteredFirst, setEnteredFirst] = useState("");
  const [enteredLast, setEnteredLast] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredGender, setEenteredGender] = useState("");
  const [enteredAge, setEenteredAge] = useState("");
  const [enteredOthers, setEnteredOthers] = useState("");
  const [enteredTestimonial, setEenteredTestimonial] = useState("");

  const dispatch = useDispatch();

  const setEnteredValue = (e) => {
    e.target.id === "firstName"
      ? setEnteredFirst(e.target.value)
      : e.target.id === "lastName"
      ? setEnteredLast(e.target.value)
      : e.target.id === "emailAddress"
      ? setEnteredEmail(e.target.value)
      : e.target.id === "age"
      ? setEenteredAge(e.target.value)
      : e.target.id === "testimonial"
      ? setEenteredTestimonial(e.target.value)
      : setEnteredOthers(e.target.value);

    return;
  };
  console.log(enteredFirst, enteredLast, enteredEmail, enteredGender, enteredAge, enteredTestimonial, enteredOthers);

  const submitHandler = async (firstname, lastname, email, gender, age, testimonial, others) => {
    // dispatch(await LoginRequest(enterUserName, enterPassword));
    console.log(enteredFirst, enteredLast, enteredEmail, enteredGender, enteredAge, enteredTestimonial, enteredOthers);
  };

  const { accountsList } = useSelector(accountsState);
  console.log("accountsList", accountsList);

  useEffect(() => {
    dispatch(getAccountsData());
  }, []);

  console.log(enteredFirst, enteredLast, enteredEmail, enteredGender, enteredAge, enteredTestimonial, enteredOthers);

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
            .filter((x) => x.fieldName != "gender")
            .map((x) => x)
            .map((item) => (
              <ValidationTextField
                // required
                // autoComplete="true"
                variant="outlined"
                defaultValue={item.value}
                id={item.fieldName}
                label={_.startCase(item.fieldName)}
                type={item.type}
                onChange={setEnteredValue}
                style={{ width: "90%", maxWidth: "800px" }}
                multiline={item.type === "multiline" ? true : false}
                className={item.type === "multiline" ? "textarea" : ""}
                key={item.fieldName}
              />
            ))}

          {showGender && (
            <Box sx={{ minWidth: "100%" }} style={{ display: "flex", justifyContent: "center" }}>
              <FormControl style={{ width: "90%", maxWidth: "800px" }}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={showGender.value}
                  label="Options"
                  onChange={(e) => setEenteredGender(e.target.value)}
                  className='textarea'
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
            onClickAction={() => submitHandler()}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default UpdateAccount;
