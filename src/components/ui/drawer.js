import * as React from 'react';
import { Box, Stack, IconButton, Link } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch } from 'react-redux';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CompanyName from './../header/companyName';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import CreateNewFolderRoundedIcon from '@mui/icons-material/CreateNewFolderRounded';

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
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, ['left']: open });
  };

  const list = () => (
    <Box
      sx={{ width: 220, background: '#ffeef8', minHeight: '100vh' }}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
    >
      <List>
        <ListItem>
          <CompanyName />
        </ListItem>
      </List>

      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <Link to="/" style={{ zIndex: '10' }}>
              <SupervisorAccountRoundedIcon />{' '}
            </Link>
          </ListItemIcon>
          <ListItemText primary={'Accounts'} />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <Link to="/create-account">
              <CreateNewFolderRoundedIcon />
            </Link>
          </ListItemIcon>
          <ListItemText primary={'Create Account'} />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <Button onClick={toggleDrawer('left', true)}>
          <Stack direction="row" spacing={0}>
            <IconButton edge="start" aria-label="menu">
              {/* <FontAwesomeIcon icon={faBars} /> */}
              <MenuRoundedIcon />
            </IconButton>
          </Stack>
        </Button>
        <SwipeableDrawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
