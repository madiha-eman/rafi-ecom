import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { auth, db } from './config/Config'
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import Offer from './pages/Offer';
import Home from './components/Home';
import { ProductsContextProvider } from './global/ProductsContext'
import AddProducts from './components/AddProducts'

export class App extends Component {

  state = {
      user: null,
  }

  componentDidMount() {

      // getting user info for navigation bar
      auth.onAuthStateChanged(user => {
          if (user) {
              db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                  this.setState({
                      user: snapshot.data().Name
                  })
              })
          }
          else {
              this.setState({
                  user: null
              })
          }
      })

  }

  render() {
  return (
    <div>
      <ProductsContextProvider>
    <Router>
      {/* <Home/> */}
      <Switch>
      <Route exact path='/' component={() => <Home user={this.state.user} />} />

       <Route path='/offer' exact component={Offer} />
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
        <Route path="/addproducts" exact component={AddProducts} />

      </Switch>
    </Router>
    </ProductsContextProvider>
    </div>
 )
}
}

export default App