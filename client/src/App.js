import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'
import CreateOccasion from './pages/CreateOccasion'
import EventList from './pages/EventList'
import Messages from './pages/Messages'
import Profile from './pages/Profile'
import LabelBottomNavigation from './components/bottomNav'
import TopNav from './components/TopNav'
import ViewFriends from './pages/ViewFriends'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Route component={_ => <Login />} />
    <Route component={CreateEvent => <CreateEvent />} /> */}
          <TopNav />
          <Route exact path="/" component={Login} />
          <Route path="/CreateOccasion" component={CreateOccasion} />
          <Route path="/EventList" component={EventList} />
          <Route path="/Messages" component={Messages} />
          <Route path="/Profile" component={Profile} />
          <Route path="/ViewFriends" component={ViewFriends} />
          <LabelBottomNavigation />
        </div>
      </Router>
    )
  }
}





export default App;
