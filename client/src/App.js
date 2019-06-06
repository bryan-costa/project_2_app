import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'
import OccasionList from './pages/OccasionList'
import CreateOccasion from './pages/CreateOccasion'
import UpdateOccasion from './pages/UpdateOccasion'
// import EventList from './pages/EventList'
import Messages from './pages/Messages'
import Profile from './pages/Profile'
import LabelBottomNavigation from './components/bottomNav'
import TopNav from './components/TopNav'
import ViewFriends from './pages/ViewFriends'
import IronmanPage from './pages/IronmanPage'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav />
          <Route exact path="/" component={Login} />
          <Route path="/CreateOccasion" component={CreateOccasion} />
<<<<<<< HEAD
          <Route path="/EventList" component={EventList} />
          <Route path="/Messages" component={Messages} />
          <Route path="/Profile" component={Profile} />
          <Route path="/ViewFriends" component={ViewFriends} />
          <Route path="/IronmanPage" component={IronmanPage} />
=======
          {/* <Route path="/EventList" component={EventList} /> */}
          <Route exact path="/OccasionList" component={OccasionList} />
          <Route exact path="/UpdateOccasion" component={UpdateOccasion} />
          {/* <Route exact path="/AddToWishList" component={AddToWishList} /> */}
          <Route exact path="/Messages" component={Messages} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/ViewFriends" component={ViewFriends} />
>>>>>>> ee3ad150946e12ee110b2d8c42e905690348edeb
          <LabelBottomNavigation />
        </div>
      </Router>
    )
  }
}





export default App;
