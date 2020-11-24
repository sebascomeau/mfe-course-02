import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { createBrowserHistory } from "history";

import Progress from "./components/Progress";
import Header from "./components/Header";
import { CssBaseline } from "@material-ui/core";

const MarketingLazy = lazy(() => import("./components/mfe/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/mfe/AuthApp"));
const DashboardLazy = lazy(() => import("./components/mfe/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const onSignIn = (user) => {
    setCurrentUser(user);
  };

  const onSignOut = () => {
    setCurrentUser(null);
  };

  useEffect(() => {
    if (currentUser) history.push("/dashboard");
  }, [currentUser]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <CssBaseline />
        <Header currentUser={currentUser} onSignOut={onSignOut} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthAppLazy onSignIn={onSignIn} />
            </Route>
            <Route path="/dashboard">
              {currentUser ? <DashboardLazy /> : <Redirect to="/" />}
            </Route>
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </Router>
  );
};

export default App;
