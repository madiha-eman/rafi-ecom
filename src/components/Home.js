import React from 'react'
import Sidebar from './Sidebar'
import Rightsidebar from './Rightsidebar'
// import Footer2 from './Footer2'
// import { Products } from './Products'
// import btnCart from './btnCart'
// import SimpleModal from './btnCart'
// import { Cart } from './Cart'

const Home = ( {user} ) => {
    return (
        <div>
             <Sidebar user={user}/> 
             {/* <Products/> */}
             {/* <Footer2 /> */}
             {/* <SimpleModal/> */}

        </div>
    )
}

export default Home
