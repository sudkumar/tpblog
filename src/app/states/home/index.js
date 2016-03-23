import angular from "angular";
import uirouter from 'angular-ui-router';

import homeController from "./home.controller";
import homeRoutes from "./home.routes";

export default angular.module("States.Home", [uirouter])
  .config(homeRoutes)
  .controller("HomeController", homeController)
  .name;
