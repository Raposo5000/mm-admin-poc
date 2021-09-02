import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";

export const AppRouter: React.FC<any> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};
