import React, { useContext, useEffect } from 'react'
import { CartContext } from '../global/CartContext'
import { Icon } from 'react-icons-kit'
import { ic_add } from 'react-icons-kit/md/ic_add'
import { ic_remove } from 'react-icons-kit/md/ic_remove'
import { iosClearhOutline } from 'react-icons-kit/ionicons/iosTrashOutline'
import {cross} from 'react-icons-kit/entypo/cross'
import {smallDown} from 'react-icons-kit/entypo/smallDown'
import {smallUp} from 'react-icons-kit/entypo/smallUp'
import {iosCloseEmpty} from 'react-icons-kit/ionicons/iosCloseEmpty'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import { auth } from '../config/Config'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { StickyContainer, Sticky } from 'react-sticky';
import StickyBox from "react-sticky-box";
import AppBar from '@material-ui/core/AppBar';


// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }
// function getModalStyle() {
//     const top = 50 + rand();
//     const left = 50 + rand();
//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }
// const useStyles = makeStyles(theme => ({
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     paper: {
//         position: 'absolute',
//         width: 800,
//         backgroundColor: theme.palette.background.paper,
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// }));
export const Cart = ({ user }) => {
    // const classes = useStyles();
    // const [modalStyle] = React.useState(getModalStyle);
    // const [open, setOpen] = React.useState(false);

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);

    const history = useHistory();

    // useEffect(() => {
    //     auth.onAuthStateChanged(user => {
    //         if (!user) {
    //             history.push('/login');
    //         }
    //     })
    // })

    return (
        <>
<>       
                {shoppingCart.length !== 0}
                <div className='cart-container'>
                    {  
                        shoppingCart.length === 0 && <>
                            <div>no items in your cart or slow internet causing trouble (Refresh the page) or you are not logged in</div>
                        </>
                    }
                    
                         
                    {shoppingCart && shoppingCart.map(cart => (
                        <div className='cart-card' key={cart.ProductID}>
                         
                             <div>
                                <Icon icon={smallUp} size={22}  className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })} />
                            
                                <div className='quantity'>{cart.qty}</div>
                          
                                <Icon icon={smallDown} size={22} className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}/>
                            </div>
                            <div className='cart-img'>
                                <img src={cart.ProductImg} alt="not found" />
                            </div>

                            <div className='cart-name'>{cart.ProductName} <br/>
                            <span className='cart-price-orignal'>৳{cart.ProductPrice}</span>
                            </div>

                            {/* <div className='cart-price-orignal'> ৳ {cart.ProductPrice}</div> */}

                            {/* <div className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_add} size={24} />
                            </div>

                            <div className='quantity'>{cart.qty}</div>

                            <div className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_remove} size={24} />
                            </div> */}

                            <div className='cart-price'>
                            ৳ {cart.TotalProductPrice}
                            </div>

                            <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
                                <Icon icon={iosCloseEmpty} size={24} />
                            </button>
                         <Divider/>
                         </div>
                    ))
                    }

                    </div>
                    {/* <div>
                        <h4>
                            Have a special code?
                        </h4>
                    </div> */}
                    
                   
                    {shoppingCart.length > 0 && <div className='cart-summary' position="fixed">
                      <StickyBox offsetTop={20} offsetBottom={20}>
                        <div className='cart-summary-heading'>
                            Cart-Summary
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Price</span>
                            <span>{totalPrice}</span>
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Qty</span>
                            <span>{totalQty}</span>
                        </div>
                        <Link to='cashout' className='cashout-link'>
                            <button className='btn btn-success btn-md' style={{ marginTop: 5 + 'px' }}>
                                Cash on delivery
                        </button>
                        </Link>
                        </StickyBox>
                    </div>} 
                 
             
            </>
              
        </>  
    )
}