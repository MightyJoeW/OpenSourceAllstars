import { Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import User from "./components/user";
import Error from "./components/error";
import { Switch } from "react-router";
const routes = (bg) => (
  <Switch>
    <Route
      path="/"
      exact
      render={(routeProps) => <Home {...routeProps} {...props} />}
    />
    <Route
      path="/about"
      exact
      render={(routeProps) => <About {...routeProps} {...props} />}
    />


    <Route path="/users/:username" exact>
      <User />
    </Route>
    <Route path="*" exact>
      <Error />
    </Route>
  </Switch>
);

export default routes;
