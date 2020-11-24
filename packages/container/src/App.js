import React, { lazy, Suspense, useState, useCallback } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import Progress from "./components/Progress";

const AuthAppLazy = lazy(() => import("./components/mfe/AuthApp"));
const MarketingAppLazy = lazy(() => import("./components/mfe/MarketingApp"));

const generateClassName = createGenerateClassName({ productionPrefix: "cnt" });

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const onSignIn = useCallback((user) => setCurrentUser(user), []);
  const onSignOut = useCallback(() => setCurrentUser(null), []);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <CssBaseline />
        <Header currentUser={currentUser} onSignOut={onSignOut} />
        <Switch>
          <Route path="/auth">
            <Suspense fallback={<Progress />}>
              <AuthAppLazy onSignIn={onSignIn} />
            </Suspense>
          </Route>
          <Route path="/">
            <Suspense fallback={<Progress />}>
              <MarketingAppLazy />
            </Suspense>
          </Route>
        </Switch>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
