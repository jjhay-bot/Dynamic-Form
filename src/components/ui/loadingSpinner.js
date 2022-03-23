import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress, { circularProgressClasses } from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

const LoadingSpinner = (props) => {
  return (
    <div
      className="centered"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        alignContent: "center",
        left: 0,
        top: "5%",
        zIndex: -1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ position: "relative", width: "100%", textAlign: "center" }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: (theme) => theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
            position: "absolute",
          }}
          size={40}
          thickness={4}
          {...props}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: (theme) => (theme.palette.mode === "light" ? "light" : "light"),
            animationDuration: "350ms",
            position: "relative",
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: "round",
            },
          }}
          size={40}
          thickness={4}
          {...props}
        />
        <br />
        <Typography variant="subtitle2" component="div" pl={2} style={{ fontSize: "1rem" }} color="primary">
          Loading...
        </Typography>
      </Box>
    </div>
  );
};

export default LoadingSpinner;
