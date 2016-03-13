import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from "./app.config";
import templates from "./templates";
import components from "./components";

angular.module("TourepediaBlog", [uirouter, templates, components]).
  config(config);
