import React from "react";
import { StyleSheet } from "react-native";
import { Router, Tabs, Scene, Stack } from "react-native-router-flux";
import ReposList from "./screen/ReposList";
import RepoDetail from "./screen/RepoDetail";

const AppRouter = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene tabs key="tabs">
          <Scene key="nav_1" >
            <Scene key="repo" component={ReposList} />
          </Scene>
          <Scene key="nav_2">
            <Scene key="other" component={RepoDetail} />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
};

export default AppRouter;
