import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "../assets/styles/main.scss";
import { appRoutes } from "routes/appRoutes";
import { RoutePath } from "constants/constants";
import ScrollToTop from "./common/scroll-to-top/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          {appRoutes.getRoutes().map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
          <Redirect from="/" to={RoutePath.login} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
