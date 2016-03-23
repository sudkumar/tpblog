import angular from "angular";
import uirouter from "angular-ui-router";

import aboutRoutes from "./about.routes";

export default angular.module("States.About", [uirouter])
  .config(aboutRoutes)
  .name;
