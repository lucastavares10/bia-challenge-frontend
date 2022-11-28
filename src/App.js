import React, { Suspense, lazy } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import FallBack from "./components/FallBack";

const Home = lazy(() => {
  return import("./views/Home");
});

const App = (props) => {
  return (
    <div>
      <Suspense fallback={<FallBack />}>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default withRouter(App);
