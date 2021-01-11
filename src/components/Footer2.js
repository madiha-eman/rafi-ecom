import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Container, Table} from 'react-bootstrap'
import '../App.css'


const useStyles = makeStyles((theme) => ({
 title:{
   fontSize: '10px',
   [theme.breakpoints.up('sm','md')]: {
    fontSize: '14px',
                                                     
  },
 },
 title3:{
  fontSize: '12px',
  fontWeight: 'bold',
  [theme.breakpoints.up('sm')]: {
    fontSize: '18px',
                                                     
  },
},
title4:{
  fontSize: '10px',
  fontWeight: 'bold',
  [theme.breakpoints.up('sm')]: {
    fontSize: '14px',
                                                     
  },
},
mintitle:{
  fontSize: '12px',
  fontWeight: 'none',
},
google:{
  width: '48px',
  height: '30px',
  margin: 4,
  [theme.breakpoints.up('sm')]: {
    width: '75px',
    height: '34px',
                                                     
  },
},
social:{
  width:'25px',
  height:'30px',
  margin:2,

},
mainSocial:{
  textAlign:'center',
  justify: 'center',
  alignItems: 'center'
},
foot1:{
  boxShadow:'10px 10px 10px 0 grey',
  paddingTop:10,
},
foot2:{
  paddingTop:'20px',
}
}));

const Footer2=()=>{
  const classes = useStyles();

    return (
      <Grid>
        <div className='foot'>
       <Grid className={classes.foot1} container direction="row">
        
      <Grid xs={2}>
      <Typography className={classes.title} variant="h4">
        #  1 hour delivery
        </Typography>
       
        </Grid>
        <Grid xs={2}>
        <Typography className={classes.title} variant="h4">
          Cash on delivery
          </Typography>
        </Grid>
        <Grid xs={2}>

        <Typography className={classes.title3} variant="h4">
           0188-1234567
           </Typography>
        </Grid>
        <Grid xs={3}>
        <Typography className={classes.title4} variant="h4">
        <span className={classes.mintitle}>or email:</span> support@chaldal.com
         </Typography>
         </Grid>

      <Grid xs={0}>
      <Typography className={classes.title} variant="h4">
             Pay with
             </Typography>
        </Grid>
        <Grid xs={2}>
        <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/Amex.png?q=low&webp=1&alpha=1'  width='25px' height='25px'/>
        <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/mastercard.png?q=low&webp=1&alpha=1'  width='25px' height='25px'/>
        <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/VIsa.png?q=low&webp=1&alpha=1' width= '25px' height='25px'/>
        <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/bkash.png?v=1&q=low&webp=1&alpha=1' width= '25px' height='25px'/>
        <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/COD.png?v=1&q=low&webp=1&alpha=1' width= '25px' height='25px'/>
        </Grid>
        </Grid>


     <Grid className={classes.foot2} container direction="row">
   
        <Grid xs={4} >
        <Grid xs={1} sm={12}>
        <Typography className={classes.title4} varient="4">
            Customer Service
            </Typography>
        </Grid>
        <Grid xs={1} sm={12}>
        <Typography className={classes.title} varient="4">
            Contact Us
            </Typography>
        </Grid>
        <Grid xs={1}  sm={12}>
        <Typography className={classes.title} varient="4">
            FAQ
            </Typography>
        </Grid>
        <Grid xs={1} sm={12}>
        <Typography className={classes.title} varient="4">
            Additional Cost
            </Typography>
        </Grid>
        </Grid>

        <Grid xs={3} >
        <Grid xs={1} sm={12}>
        <Typography className={classes.title4} varient="4">
            About Chaldal
            </Typography>
        </Grid>
        <Grid xs={1} sm={12}>
        <Typography className={classes.title} varient="4">
            Privacy Policy
            </Typography>
        </Grid>
        <Grid xs={1} sm={12}>
        <Typography className={classes.title} varient="4">
            Terms of Use
            </Typography>
        </Grid>
        </Grid>

        <Grid xs={2}>
        <Grid xs={1} sm={12}>
        <Typography className={classes.title4} varient="4">
            For Bussiness
            </Typography>
        </Grid>
        <Grid xs={1} sm={12}>
        <Typography  className={classes.title} varient="4">
            Corporate
            </Typography>
        </Grid>
       
        </Grid>
      <Grid xs={2} >         
      <img className={classes.google} src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/google_play_store.png?q=low&webp=1&alpha=1'/>
      <img className={classes.google} src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/app_store.png?q=low&webp=1&alpha=1'/> 
      
         </Grid>
        </Grid>
        <Grid conatiner className={classes.mainSocial} sm={12} xs={12}>
        <a href='https://www.facebook.com/'><img className={classes.social} src=' https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/Facebook.png?q=low&webp=1&alpha=1 '/></a>
      <a href='https://www.youtube.com/'> <img className={classes.social} src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/Youtube.png?q=low&webp=1&alpha=1'/></a> 
      <a href='https://twitter.com/'> <img className={classes.social} src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/twitter.png?q=low&webp=1&alpha=1' /></a> 
      <a href='https://www.instagram.com/'><img className={classes.social} src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/Instagram.png?q=low&webp=1&alpha=1'/></a>
        </Grid>
 </div>
 </Grid>
    )
}

export default Footer2

