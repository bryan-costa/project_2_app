import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './pages/Login'
import CreateEvent from './pages/CreateEvent'
import AddToWishList from './pages/AddToWishList'
import Messages from './pages/Messages'
import Profile from './pages/Profile'

const App = _ =>
<Router>
  <div>
    {/* <Route component={_ => <Login />} />
    <Route component={CreateEvent => <CreateEvent />} /> */}
    <Route path="/home" component = {Login} />
    <Route path="/CreateEvent" component = {CreateEvent} />
    <Route path="/AddToWishList" component = {AddToWishList} />
    <Route path="/Messages" component = {Messages} />
    <Route path="/Profile" component = {Profile} />

  </div>
</Router>

export default App;
