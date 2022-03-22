import { Grid, Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Grid container direction="row" spacing={2} sx={{ pr: 2 }}>
        <Grid item className="nabTabs">
          <Button color="inherit" size="large">
            <Link to="/">
              Home
            </Link>
          </Button>
        </Grid>
        <Grid item className="nabTabs">
          <Button color="inherit" size="large">
            <Link to="/accounts">list of Accounts</Link>
          </Button>
        </Grid>
        <Grid item className="nabTabs">
          <Button color="inherit" size="large">
            <Link to="/create-account">Create Account</Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
