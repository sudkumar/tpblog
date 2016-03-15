import angular from 'angular';
import uirouter from 'angular-ui-router';

// import the configuration 
import config from "./app.config";

// import all the modules
import shared from "./shared";
import templates from "./templates";
import components from "./components";

import db from "./db";


angular.module("TourepediaBlog", 
    [uirouter, templates, shared, components, db]).
    config(config);
