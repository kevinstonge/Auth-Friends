import React from "react";
import Header from "./components/Header";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import "./style/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//LOGIN
//FRIENDSLIST - ADD FRIEND
//->FRIENDCARD
//[stretch]: FRIENDCARD - EDIT, DELETE
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
