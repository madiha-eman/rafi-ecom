import React, { useState } from 'react';
 import clsx from 'clsx';
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import * as IoIcons from 'react-icons/io';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { IconContext } from 'react-icons/lib';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import Drawer from '@material-ui/core/Drawer';
import egg from './egg1.png'
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import { Products } from './Products';
import SimpleModal from './btnCart';
import Footer2 from './Footer2';
// import Rghtsidebar from './Rightsidebar'
import Rightsidebar from './Rightsidebar';
import classNames from "classnames";
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
// import Home from './Home'
// import { auth } from '../config/Config'
// import { Icon } from 'react-icons-kit'
// import { cart } from 'react-icons-kit/entypo/cart'
// import { useHistory } from 'react-router-dom'
// import { CartContext } from '../global/CartContext'
// import {createContext} from 'react'

const Nav = styled.div`
  background: #ffc40c;
  height: 58px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 1.5rem;
  font-size: 1.5rem;
  height: 20px;
  display: flex;
  color: #4c4c4c;
  justify-content: flex-start;
  align-items: center;
`;


const SidebarNav = styled.nav`
  background: white;
  height: 100%;
  border-right: 1px solid grey;
  width: 250px;
  display: flex;
  justify-content: center;
  position: fixed;
  position: absolute;
  top: 54px;
  left: ${({ sidebar }) => (sidebar ? 'fixed' :  '-100%')};
  transition: 350ms;
  z-index: 10;
  padding: 0 19px;
  position: ${({ sidebar }) => (sidebar ? 'fixed' :  '-100%')};  

`;

const SidebarWrap = styled.div`
  width: 100%;
  position:sticky;  

`;
// const drawerWidth = 180;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  root2: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    // width: 400,
    // marginLeft:'20px',
    marginRight:'8px',
  },
  title1:{
    fontFamily: 'Satisfy, cursive',
    fontSize: '29px',
    // marginRight:'20px',
    fontWeight: '600',
    display: 'none',
    color:'#191919',
    opacity:'0.8',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
                                                       
    },
  },
  egg:{
    display: 'none',
    // marginLeft:25,
    [theme.breakpoints.up('sm','md')]: {
      display: 'block',
                                                       
    },
  },
  title2:{
    display: 'none',
  //  marginBottom: '19px',
    color:'#4c4c4c',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
    [theme.breakpoints.up('sm','md')]: {
      display: 'block',
                                                       
    },
  },
  title3:{
    display: 'none',
    color:'#4c4c4c',
    // marginBottom: '19px',
    fontSize: '16px',
    taxtAlign:'center',
    cursor: 'pointer',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm','md')]: {
      display: 'block',
                                                       
    },
  },
  title4:{
    display: 'none',
    color:'whitesmoke',
    fontSize: '16px',
    cursor: 'pointer',
    taxtAlign:'center',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm','md')]: {
      display: 'block',
                                                       
    },
  },

  input: {
    marginLeft: theme.spacing(1),
    // marginRight:6,
    flex: 1,
    [theme.breakpoints.up('md','sm')]: {
      width: '20ch',
    },
  },
  iconButton: {
    padding: 6,
  },
  divider: { 
    display:'none',
    height: 58,
    margin: 0,
    [theme.breakpoints.up('sm','md')]: {
      display: 'block',
                                                       
    },
   
  },
  divider1: {
    height: 18,
    backgroundColor:'black',
    margin: 4,
   
  },
  drawerHeader: {
    display: 'flex',
    // alignItems: 'center',
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0,0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 250,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,

  },
  mobile:{
    display: 'none',

    [theme.breakpoints.up('sm','md')]: {
      display: 'none',

  },
}
}));
const Sidebar = () => {
  // const history = useHistory();
  //   // const { totalQty } = useContext(CartContext);

  //   // handle logout
  //   const handleLogout = () => {
  //       auth.signOut().then(() => {
  //           history.push('/login');
  //       })
  //   }
  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => 
  setSidebar(!sidebar);

 
  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <Grid>
        <AppBar position="fixed" color="#ee496a">
        <Nav>
          <Grid xs={1}>
          <NavIcon to='#'>
          <FaIcons.FaBars onClick={showSidebar} /> 
          </NavIcon>
          </Grid>
          <Grid xs={0}>
          <img className={classes.egg} src={egg} alt='egg' width='37px'/>
          </Grid>
          <Grid xs={2}>
          <Typography className={classes.title1}  variant="h4">
               Chaldal 
            </Typography>
            </Grid>
            <Grid xs={8}>
          <Paper component="form" className={classes.root2}>
          
      <InputBase
        className={classes.input}
        placeholder="Search for products(e.g, egg, milk, potato"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon /> 
      </IconButton>
         </Paper>
         </Grid>
         <Divider className={classes.divider} orientation="vertical" />
         <Grid xs={3}>
         <div className="help">
         <Typography className={classes.title2} variant="h6">
         <IoIcons.IoMdHelpCircle  className={classes.markicon}/>
             Help & More 
            </Typography>
            </div>
            </Grid>
            <Divider className={classes.divider} orientation="vertical" />
            <Grid xs={2}>
          <div className='lang'>
          <Typography className={classes.title3} variant="h6">
             <span className='eng'> EN </span> | বাং 
             
            </Typography>
            </div>
            </Grid>
            <Divider className={classes.divider} orientation="vertical" />
            <Grid xs={3} md={3} xl={3}>
          <div className="div-signin">
             <SimpleModal
             />
            </div>
            </Grid>
        </Nav>
        </AppBar>
        </Grid>
        <SidebarNav sidebar={!sidebar} position='permanent'  variant="persistent" > 
          <SidebarWrap>
        
            <NavIcon position='permanent'  variant="permanent" to='#' onClick={showSidebar}>
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu className={classes.text} item={item} key={index} />;
            })}
           
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: sidebar,
        })}
      >




        <div className={classes.drawerHeader} />
        <Typography paragraph>
        {/* <Rghtsidebar /> */}
        <Rightsidebar/>
       <Products/> 

       </Typography>
       <Footer2 />
 
     
      </main>

      {/* <Hidden smUp implementation="css">
      <Drawer
            container={container}
            variant="temporary"
            sidebar={sidebar}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {sidebar}
            </Drawer>
        </Hidden> */}
    </>
  );
};

export default Sidebar;
