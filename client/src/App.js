import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'
import OccasionList from './pages/OccasionList'
import CreateOccasion from './pages/CreateOccasion'
import UpdateOccasion from './pages/UpdateOccasion'
// import AddToWishList from './pages/AddToWishList'
import Messages from './pages/Messages'
import Profile from './pages/Profile'
import LabelBottomNavigation from './components/bottomNav'
import TopNav from './components/TopNav'
import ViewFriends from './pages/ViewFriends'
// import AddExperience from './components/AddToWishList/addExperience.js'
import SearchResults from './components/SearchResults/SearchResults.js'
import SearchExperience from './pages/SearchExperience/SearchExperience.js'
import IronmanPage from './pages/IronmanPage'
import IronmanWishList from './pages/IronmanWishList'
import ContributePage from './pages/ContributePage'
import Contributed from './pages/Contributed'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav />
          <Route exact path="/" component={Login} />
          <Route path="/CreateOccasion" component={CreateOccasion} />
          <Route path="/OccasionList" component={OccasionList} />
          <Route path="/UpdateOccasion" component={UpdateOccasion} />
          <Route path="/Messages" component={Messages} />
          <Route path="/Profile" component={Profile} />
          <Route path="/ViewFriends" component={ViewFriends} />
          <Route exact path="/Search" component={SearchExperience} />
          <Route exact path="/SearchResults" component={SearchResults} />
          <Route path="/IronmanPage" component={IronmanPage} />
          <Route path="/IronmanWishList" component={IronmanWishList} />
          <Route path="/ContributePage" component={ContributePage} />
          <Route path="/Contributed" component={Contributed} />
          <LabelBottomNavigation />
        </div>
      </Router>
    )
  }
}




export default App;
