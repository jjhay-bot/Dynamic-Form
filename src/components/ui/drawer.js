import * as React from "react";
import { Box, Stack, IconButton, Link } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import CompanyName from "./../header/companyName";

const setPageValue = false;

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const dispatch = useDispatch();
  // const { formModalShow } = useSelector(formModalState);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, ["left"]: open });
  };

  const list = () => (
    <Box
      sx={{ width: 200, background: "#ffeef8", minHeight: "100vh" }}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        <ListItem ListItem onClick={() => dispatch(setPageValue("home"))}>
          <CompanyName />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem onClick={() => dispatch(setPageValue("accessories"))}>
          <ListItemIcon>
            <img
              src="https://raw.githubusercontent.com/jjhay-bot/sample-project-ss-/main/dnd/diamond.png"
              alt="Logo"
              height="27.5px"
            />
          </ListItemIcon>
          <ListItemText primary={"Accessories"} />
        </ListItem>

        <ListItem onClick={() => dispatch(setPageValue("bracelets"))}>
          <ListItemIcon>
            <img
              src="https://raw.githubusercontent.com/jjhay-bot/sample-project-ss-/main/dnd/bracelet%20(2).png"
              alt="Logo"
              height="32px"
            />
          </ListItemIcon>
          <ListItemText primary={"Bracelets"} />
        </ListItem>

        <ListItem onClick={() => dispatch(setPageValue("earrings"))}>
          <ListItemIcon>
            <img
              src="https://raw.githubusercontent.com/jjhay-bot/sample-project-ss-/main/dnd/earrings.png"
              alt="Logo"
              height="30px"
            />
          </ListItemIcon>
          <ListItemText primary={"Earrings"} />
        </ListItem>

        <ListItem onClick={() => dispatch(setPageValue("necklaces"))} href="#root">
          <ListItemIcon>
            <img
              src="https://raw.githubusercontent.com/jjhay-bot/sample-project-ss-/main/dnd/necklace.png"
              alt="Logo"
              height="30px"
            />
          </ListItemIcon>
          <ListItemText primary={"Necklaces"} />
        </ListItem>
      </List>

      <Divider />
      <List>
        <ListItem onClick={() => dispatch(setPageValue("home"))}>
          <ListItemIcon>
            <img
              src="https://raw.githubusercontent.com/jjhay-bot/sample-project-ss-/main/dnd/new.png"
              alt="Logo"
              height="30px"
            />
          </ListItemIcon>
          <ListItemText primary={"New Arrivals"} />
        </ListItem>
        <ListItem onClick={() => dispatch(setPageValue("home"))}>
          <ListItemIcon>
            <img
              src="https://raw.githubusercontent.com/jjhay-bot/sample-project-ss-/main/dnd/quality.png"
              alt="Logo"
              height="30px"
            />
          </ListItemIcon>
          <ListItemText primary={"Best Sellers"} />
        </ListItem>
        <ListItem onClick={() => dispatch(setPageValue("home"))}>
          <ListItemIcon>
            <img
              src="https://raw.githubusercontent.com/jjhay-bot/sample-project-ss-/main/dnd/hot-sale.png"
              alt="Logo"
              height="30px"
            />
          </ListItemIcon>
          <ListItemText primary={"On Sale"} />
        </ListItem>
      </List>
      <Divider />

      <List>
        <ListItem
          button
          onClick={() => {
            // dispatch(setFormModalShow(true));
          }}
        >
          <ListItemIcon>
            <img
              src="https://raw.githubusercontent.com/jjhay-bot/sample-project-ss-/main/dnd/paper-plane.png"
              alt="Logo"
              height="26px"
            />
          </ListItemIcon>
          <ListItemText primary={"Message Us"} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          <Stack direction="row" spacing={0}>
            <IconButton edge="start" aria-label="menu">
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
          </Stack>
        </Button>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
