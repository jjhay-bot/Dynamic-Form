import { Grid, Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import CreateNewFolderRoundedIcon from "@mui/icons-material/CreateNewFolderRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

export default function Navbar() {
  return (
    <div>
      <Grid container direction="row" spacing={2} sx={{ pr: 2 }}>
        <Grid item className="nabTabs">
          <Button
            color="inherit"
            size="large"
            startIcon={<SupervisorAccountRoundedIcon style={{ paddingBottom: "2.5px" }} className="color1" />}
          >
            <Link to="/accounts">List of Accounts</Link>
          </Button>
        </Grid>

        <Grid item className="nabTabs">
          <Button
            color="inherit"
            size="large"
            startIcon={<CreateNewFolderRoundedIcon style={{ paddingBottom: "2.5px" }} className="color1" />}
          >
            <Link to="/create-account">Create Account</Link>
          </Button>
        </Grid>

        <Grid item className="nabTabs">
          <Button
            color="inherit"
            size="large"
            startIcon={<EditRoundedIcon style={{ paddingBottom: "2.5px" }} className="color1" />}
          >
            <Link to="/update-account">Edit Account</Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
