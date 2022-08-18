import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  Button,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Badge,
  MenuIcon,
  NotificationsIcon,
  Drawer,
  List,
  Divider,
  IconButton,
  ChevronLeftIcon,
} from "../../includes";
import { styled, useTheme } from '@mui/material/styles';
import {Navigate} from 'react-router-dom';
import { drawerOpenClick, userLogout } from "../../includes/actions";
import { mainListItems } from "./MenuItem";


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const MuiAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

class TopBarMenu extends Component {
  constructor(props){
    super(props)
    this.state = {login : true}
  }
  handleDrawerOpen = () => {
    this.props.drawerOpenClick(!this.props.dashboard.drawerOpen);
  };
  onUserLogout =()=>{
    this.props.userLogout();
    this.setState({login:null})
  }
  render() {
    const { drawerOpen } = this.props.dashboard;
    const { user } = this.props;

    return (
      <Fragment>
        {this.state.login == null && (
          <Navigate to="/" replace={true} />
        )}
         <Box sx={{ display: 'flex'}}>
          <MuiAppBar position="static" open={drawerOpen}>
            <Toolbar>
              <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={this.handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={5} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Typography color="inherit">{user}</Typography>
              <Button
                style={{margin:10}}
                variant="contained"
                size="small"
                onClick={this.onUserLogout}>
                Log out
              </Button>
            </Toolbar>
          </MuiAppBar>
        </Box>
        <Drawer
           sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={drawerOpen}
        >
          <div>
            <IconButton onClick={this.handleDrawerOpen}>
              <ChevronLeftIcon className={"toolbarIcon"}/>
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
        </Drawer>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  drawerOpenClick: drawerOpenClick,
  userLogout: userLogout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBarMenu);
