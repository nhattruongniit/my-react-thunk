import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Projects from "../modules/Projects";

const App = props => {
  const { loading } = props.app;

  return (
    <div className="App">
      <h1>This is Apps component</h1>
      {loading && <h3>Loading....</h3>}
      <Switch>
        <Route path="/" component={Projects} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
