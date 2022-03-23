import { useState } from "react";
import { Button, Tooltip, Stack } from "@mui/material";

export default function SubmitButton(props) {
  const [buttonColor, setbuttonColor] = useState("#9d85a1");

  return (
    <Stack direction="row" spacing={2} sx={{ flexDirection: `${props.position}` }}>
      <Tooltip title="Send data to the server">
        <Button
          variant="contained"
          size="large"
          endIcon={props.endIcon}
          startIcon={props.startIcon}
          className="white"
          style={{ backgroundColor: buttonColor, margin: "1rem 0.5rem" }}
          onBlur={() => setbuttonColor("#9d85a1")}
          onMouseOver={() => setbuttonColor("#574c6b")}
          onFocus={() => setbuttonColor("#574c6b")}
          onMouseOut={() => setbuttonColor("#9d85a1")}
          onClick={props.onClickAction}
        >
          {props.message}
        </Button>
      </Tooltip>
    </Stack>
  );
}
