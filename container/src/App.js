import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import MarketingApp from "../components/mfes/MarketingApp";

const App = () => {
  return (
    <div>
      <StylesProvider>
        <h1>Hi container!</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/marketing" component={MarketingApp} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};

export default App;
