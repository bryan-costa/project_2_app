import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'
import OccasionList from './pages/OccasionList'
import CreateOccasion from './pages/CreateOccasion'
import UpdateOccasion from './pages/UpdateOccasion'
import AddToWishList from './pages/AddToWishList'
import Messages from './pages/Messages'
import Profile from './pages/Profile'
import LabelBottomNavigation from './components/bottomNav'
import TopNav from './components/TopNav'
import ViewFriends from './pages/ViewFriends'
import AddExperience from './components/AddToWishList/addExperience.js'
import SearchResults from './components/SearchResults/SearchResults.js'
import IronmanPage from './pages/IronmanPage'
import IronmanWishList from './pages/IronmanWishList'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav />
          <Route exact path="/" component={Login} />
          <Route exact path="/CreateOccasion" component={CreateOccasion} />
          <Route exact path="/OccasionList" component={OccasionList} />
          <Route exact path="/Messages" component={Messages} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/ViewFriends" component={ViewFriends} />
          <Route exact path="/IronmanPage" component={IronmanPage} />
          <Route exact path="/IronmanWishList" component={IronmanWishList} />
          <Route path="/AddToWishList" component={AddToWishList} />
          <Route path="/search" component={AddExperience} />
          <LabelBottomNavigation />
        </div>
      </Router>
    )
  }
}




export default App;
