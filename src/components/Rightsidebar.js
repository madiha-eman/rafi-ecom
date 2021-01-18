import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide:{
      display:'none',
    
  },
  hid: {
    position:'fixed',
    position:'sticky',
    // display: 'block',
    background: 'linear-gradient(to bottom, #696969 70%, whitesmoke 70%)',
    boxShadow: '2px 2px 4px 2px grey',
    width:"100%",
    height:'100%',
    border:'none',
  },
  '& hover':{
    boxShadow: '2px 0px 4px 2px lightgrey',
    background: 'linear-gradient(to bottom, #dcdcdc 70%, whitesmoke 70%)',

  },
  cartclose:{
      border:'1px solid black',
      outline:'none',
      marginLeft:'90px',
      height:'30px',

  },
  cart1:{
      background: '#a9a9a9',
      paddingTop:'1.5px',
      paddingBottom:'1.5px'
      
  },
  drawer: {
    
    width: drawerWidth,
    flexShrink: 1,


  },
  drawerPaper: {
    marginTop:'58.4px',
    background:'white',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',

      
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
  
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function Rightsidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* {/* <AppBar */}
        {/* position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })} */}
      {/* > */}
        <div style={{  position:'fixed',
      position:'sticky', position:'absolute',right: 0, marginTop:'20%',  height:'83px',}} className={clsx(open && classes.hide)} anchor="right" variant="persistent">
          <Button
            onClick={handleDrawerOpen}
            className={classes.hid}
          >
           
          </Button>
        </div>
       {/* </AppBar>  */}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/* <div className={classes.drawerHeader}>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div> */}
        <Divider />
        <Grid direction='row' onClick={handleDrawerClose}  className={classes.cart1}>
        <Typography  varient='h3' onClick={handleDrawerClose} className={classes.cart1}>0 ITEMS
    <Button onClick={handleDrawerClose} className={classes.cartclose}>Close</Button>
    </Typography>
    </Grid>
      </Drawer>
    </div>
  );
}
