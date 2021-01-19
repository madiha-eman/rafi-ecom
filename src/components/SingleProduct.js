import React, { useContext }  from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { ProductsContext } from '../global/ProductsContext'
import Typography from '@material-ui/core/Typography';


// const useStyles = makeStyles((theme) => ({

// });

const SingleProduct = () => {
    // const classes= useStyles();
    const { products } = useContext(ProductsContext);
    return (
        <div>
            {products.map(product => (
            <Grid>
            <div key={product.ProductID}>
                <Grid sm={12} xs={6} md={6}>
                    
              <div>
                  <img src={product.ProductImg} alt='product' />
              </div>
               </Grid>
               <Grid sm={12} xs={6} md={6}>
                   <div>
                       <h2>
                       {product.ProductName}
                       </h2>
                   </div>
                 <div>
                     <h4>
                     {product.ProductPrice}
                     </h4>
                         
                 </div>
                

               </Grid>
               </div>
            </Grid>
            ))}
        </div>
    )
}

export default SingleProduct
