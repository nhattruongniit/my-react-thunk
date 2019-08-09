import React from "react";
import { Switch, Route } from "react-router-dom";

// container
import ProjectPage from "./ProjectPage";

const Container = () => {
  return (
    <Switch>
      <Route path="/dashboard/projects" component={ProjectPage} />
    </Switch>
  );
};

export default Container;
