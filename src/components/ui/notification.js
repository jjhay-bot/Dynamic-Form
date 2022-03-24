import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector } from "react-redux";
import { notificationState } from "../../store/ui/notification-slice";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarNotif() {
  const { shownotification, shownotificationMessage } = useSelector(notificationState);
  const conditionSucess = ["Successfully fetch data!", "Updated successfully!", "Successfully save data!"];
  const statusSuccess = conditionSucess.find((item) => item === shownotificationMessage);

  return (
    <>
      {shownotification ? (
        <Stack spacing={2} sx={{ width: "50%" }}>
          <Snackbar open={true} sx={{ opacity: "95%" }}>
            <Alert severity={statusSuccess ? "success" : "error"} sx={{ width: "100%" }}>
              {shownotificationMessage}
            </Alert>
          </Snackbar>
        </Stack>
      ) : null}
    </>
  );
}
