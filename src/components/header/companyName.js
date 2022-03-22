import React from "react";
import { Grid, Tab } from "@mui/material/";

const CompanyName = () => {
  return (
    <Grid item xs={10} lg={4} p={1.5}>
      <img
        src="https://visualbasement.com/static/media/logo_full.759c5033.png"
        alt="Logo"
        height="45px"
        style={{ paddingLeft: "10px" }}
      />
    </Grid>
  );
};

export default CompanyName;
