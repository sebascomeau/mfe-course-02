import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import Header from "../components/Header";
import MarketingApp from "../components/mfes/MarketingApp";

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider>
        <Header />
        <Switch>
          <Route path="/marketing" component={MarketingApp} />
        </Switch>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
