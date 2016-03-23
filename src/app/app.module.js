import angular from 'angular';
import uirouter from 'angular-ui-router';



// import the configuration
import config from "./app.config";

// import the services
import services from "./services";

// import all the modules
import includes from "./includes";
import core from "./core";
import states from "./states";

import db from "./db";


angular.module("TourepediaBlog",
    [services, uirouter, includes, core, states, db]).
    config(config);
