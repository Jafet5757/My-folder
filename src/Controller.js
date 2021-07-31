import React from "react";
import App from "./App";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import Project from "./pages/Project";

export default function Controller() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route
          exact
          path="/:title/:description&:imgs&:techs&:goal&:urls"
          children={<Child />}
        />
        <Route path="*">
          <NoFound />
        </Route>
      </Switch>
    </Router>
  );
}

function Child() {
  console.log(useParams());
  const a = useParams();
  return <div>
    <Project {...a}/>
  </div>;
}

function NoFound(){
    return <div>
        Page not found
    </div>
}
