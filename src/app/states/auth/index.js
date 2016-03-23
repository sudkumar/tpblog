import angular from "angular";
import uirouter from "angular-ui-router";

import authRoutes from "./auth.routes";

export default angular.module("States.Auth", [uirouter])
    .config(authRoutes)
    .name
