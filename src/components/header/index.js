import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SwipeableTemporaryDrawer from "./../ui/drawer";
import CompanyName from "./companyName";
import { Grid } from "@mui/material";
import Navbar from "./Navbar";

export default function Header() {
  const [icon, setIcon] = useState(true && window.innerWidth > 1200);

  useEffect(() => {
    function updateWidth() {
      if (window.innerWidth >= 1200) {
        setIcon(true);
      } else {
        setIcon(false);
      }
    }
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ padding: "0rem" }}>
          <Grid container justifyContent="space-between" direction="row" alignItems="center">
            <Grid item>
              <CompanyName />
            </Grid>
            <Grid item>
              {icon ? (
                <Navbar />
              ) : (
                <div>
                  <SwipeableTemporaryDrawer />
                </div>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
