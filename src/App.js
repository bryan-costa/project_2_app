import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'
import Occasion from './pages/CreateOccasion'
import AddToWishList from './pages/AddToWishList'
import Messages from './pages/Messages'
import Profile from './pages/Profile'
import LabelBottomNavigation from './components/bottomNav'
import OccBtn from './components/Form/Button/Button.js'

class App extends Component {

  handleFormSubmit = () => {

    console.log("Handling form submit")
    // let newOcc = {
    //   // name: this.state.name,
    //   type: this.state.type,
    //   description: this.state.description,
    //   date: this.state.date,
    //   // userid: this.state.userid
    // }
    // Occasion.postOne(newOcc)
    // this.state.occList.push(newOcc)
    // this.setState({ newOcc })
    // need to include navigation to the wish list page
  }
  render() {
    return (
      <Router>
        <div>
          {/* <Route component={_ => <Login />} />
    <Route component={CreateEvent => <CreateEvent />} /> */}
          <Route exact path="/" component={Login} />
          <Route path="/CreateOccasion" component={() => <Occasion handleFormSubmit={this.handleFormSubmit} />} />
          <Route path="/AddToWishList" component={AddToWishList} />
          <Route path="/Messages" component={Messages} />
          <Route path="/Profile" component={Profile} />
          <LabelBottomNavigation />
        </div>
      </Router>
    )
  }
}





export default App;
