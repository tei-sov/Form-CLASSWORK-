import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
// import PrivateRoute from "./ProtctedRoute";
// import Home from "./Home";
import Login from "./login";

import Editform from "./Editform";
import Use from "./firebase/Use";

import Register from "./Register";
import ProtectRoute from "./ProtectRoute";

function Router() {
  return (
    <>
      <BrowserRouter>
        {/*if user is not logged in,redirect to home page else show this url */}
        <Switch>
          <ProtectRoute exact path="/" component={Use} />
          <Route path="/edit/:id" component={Editform} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Router;
