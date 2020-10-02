import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={() => {
        if (props.loggedIn) {
          return <Component />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};
export default PrivateRoute;
