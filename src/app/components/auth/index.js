import angular from "angular";
import uirouter from "angular-ui-router";

import authRoutes from "./auth.routes";

export default angular.module("Components.Auth", [uirouter])
    .config(authRoutes)
    .name