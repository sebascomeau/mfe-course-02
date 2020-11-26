import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory, History, Pathname } from "history";
import App from "./App";

type MountOptions = {
  onNavigate?: History.LocationListener;
  defaultHistory?: History;
  initialPath?: string;
}

const mount = (el: Element, { onNavigate, defaultHistory, initialPath }: MountOptions = {}) => {
  const history =
    defaultHistory ??
    createMemoryHistory({
      initialEntries: [initialPath ?? ""],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }: { pathname: Pathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) mount(devRoot, { defaultHistory: createBrowserHistory() });
}

export { mount };
