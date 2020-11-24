import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import Progress from "./components/Progress";

const AuthenticationAppLazy = lazy(() =>
  import("./components/mfe/AuthenticationApp")
);
const MarketingAppLazy = lazy(() => import("./components/mfe/MarketingApp"));

const generateClassName = createGenerateClassName({ productionPrefix: "cnt" });

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <CssBaseline />
        <Header />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth" component={AuthenticationAppLazy} />
            <Route path="/" component={MarketingAppLazy} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
