import React, { useContext, useState } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion'
import { useDispatch} from 'react-redux'
import { ProductsContext } from '../global/ProductsContext'
import DetailsProduct from './DetailsProduct'
 import { CartContext } from '../global/CartContext'
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

    // const [sidebar, setSidebar] = useState(false);
  
    // const showSidebar = () => setSidebar(!sidebar);

   const { dispatch } = useContext(CartContext);

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
                              initial={{opacity: 0}}
                              animate={{opacity: 1 }}
                              transition={{duration: 5 }}/>
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
                     <div className={clsx(open && classes.hide)}>
                    <h2 className='shopping-bag' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product})}>Add to Shopping Bag </h2>
                    </div> 
                      <button className='btn-hvr'><DetailsProduct/></button>
                    </div>
                    </div>
                        <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product})}><a>ADD TO CART</a></button>
                    </div>
                ))}
            </div>
            </Typography>
     
     {/* </main>  */}
        </>
    )
}