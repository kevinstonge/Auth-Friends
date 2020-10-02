import React, { useState, useEffect } from "react";
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
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <Router>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <PrivateRoute
          exact
          path="/friends"
          loggedIn={loggedIn}
          component={FriendsList}
        />
        <Route
          path="/login"
          render={() => <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route
          render={() => <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
