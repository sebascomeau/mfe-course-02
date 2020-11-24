import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "../components/Header";
import MarketingApp from "../components/mfes/MarketingApp";

const generateClassName = createGenerateClassName({ productionPrefix: "cnt" });

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <CssBaseline />
        <Header />
        <MarketingApp />
        {/**
         * <Switch>
          <Route path="/marketing" component={MarketingApp} />
        </Switch>
        **/}
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
