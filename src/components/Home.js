import React from 'react'
import Sidebar from './Sidebar'
import Footer2 from './Footer2'
import { Products } from './Products'

const Home = ( {user} ) => {
    return (
        <div>
             <Sidebar user={user}/> <br />
             <Footer2 />
             <Products/>
             
          
        </div>
    )
}

export default Home
