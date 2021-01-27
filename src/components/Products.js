import React, { useContext, useState } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion'
// import { useDispatch } from 'react-redux'
import { ProductsContext } from '../global/ProductsContext'
import DetailsProduct from './DetailsProduct'
import { CartContext } from '../global/CartContext'
import { Icon } from 'react-icons-kit'
import {arrows_circle_plus} from 'react-icons-kit/linea/arrows_circle_plus'
import {arrows_circle_minus} from 'react-icons-kit/linea/arrows_circle_minus'
import {minus} from 'react-icons-kit/metrize/minus'
import {plus} from 'react-icons-kit/metrize/plus'

import '../css/Home.css'

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  hide: {
    display: 'none',

  },
  content: {
    flexGrow: 8,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -10,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
export const Products = () => {
  const { products } = useContext(ProductsContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [title, setTitle] = useState('Add to Shopping Bag');
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);

  const {  shoppingCart, dispatch } = useContext(CartContext);

  return (
    <>
      {/* {products.length !== 0 && <h1>Products</h1>}  */}
      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: sidebar,
        })}
      > */}
      {/* <div className={classes.drawerHeader} /> */}
      <Typography paragraph>
        <div className='products-container'>
          {products.length === 0 && <div>slow internet...no products to display</div>}
          {products.map(product => (
            <div className='product-card' key={product.ProductID}>
              <div className="product-hvr">
                <div className='product-img'>
                  <motion.img src={product.ProductImg} alt="not found"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 5 }} />
                </div>
                <div className='product-name'>
                  {product.ProductName}
                </div>
                <div className='product-price'>
                  ৳ <span className='product-price1'>{product.ProductPrice}</span>
                </div>
                {/* <div className='bag'>
                    {/* <div className={clsx(open && classes.hide)} anchor="right"> */}
                {/* </div>  */}
                {/* </div> */}
                <div class="middle">
                  <div className={clsx(open && classes.hide)}onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>
                  <div className='shopping-bag0'>
                 <h2 className='shopping-bag' onClick={() => setTitle(<> 
                  {shoppingCart.length !== 0}
                  {shoppingCart && shoppingCart.map(cart => (
                  <div key={cart.ProductID}>
                      <div className='p-bag0'>
                      <p className='p-bag'> ৳ {cart.TotalProductPrice}
                        <div className='add-hvr'>
                           <Icon icon={minus} size={26} className='dec1' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })} />
                                  <div className='quantity-bag'>{cart.qty}</div>
                           <Icon icon={plus} size={26} className='inc1' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })} /> 
                               </div>
                                </p> </div><span className='p2-bag'>in bag</span></div>))}</>)}> <span>{title}</span> </h2>
                </div>
                  </div>
                <div className='btn-hvr0'>
                  <button className='btn-hvr'><DetailsProduct /></button>
                  </div>
                </div>
              </div>
              <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}><a>ADD TO CART</a></button>
            </div>
          ))}
        </div>
      </Typography>

      {/* </main>  */}
    </>
  )
}