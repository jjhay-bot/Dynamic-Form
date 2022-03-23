import * as React from "react";
import { Box, IconButton } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CompanyName from "./../header/companyName";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import CreateNewFolderRoundedIcon from "@mui/icons-material/CreateNewFolderRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, ["left"]: open });
  };

  const list = () => (
    <Box
      sx={{ width: 215, background: "#ffeef8", minHeight: "100vh" }}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        <ListItem>
          <CompanyName />
        </ListItem>
      </List>

      <Divider />
      <List>
        <Link to="/accounnts" replace>
          <ListItem button>
            <ListItemIcon>
              <SupervisorAccountRoundedIcon className="color1" />
            </ListItemIcon>
            <ListItemText primary={"Accounts"} className="color1" />
          </ListItem>
        </Link>

        <Link to="/create-account" replace>
          <ListItem button>
            <ListItemIcon>
              <CreateNewFolderRoundedIcon className="color1" />
            </ListItemIcon>
            <ListItemText primary={"Create Account"} className="color1" />
          </ListItem>
        </Link>

        <Link to="/update-account" replace>
          <ListItem button>
            <ListItemIcon>
              <EditRoundedIcon className="color1" />
            </ListItemIcon>
            <ListItemText primary={"Edit Account"} className="color1" />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </Box>
  );

  return (
    <React.Fragment >
      <IconButton size="large" onClick={toggleDrawer("left", true)} style={{ marginRight: "10px" }}>
        <MenuRoundedIcon />
      </IconButton>
      
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </React.Fragment>
  );
}
