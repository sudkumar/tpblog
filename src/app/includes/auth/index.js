import angular from "angular";

import login from "./login";
import signup from "./signup";
import forgotpass from "./forgotpass";

import authController from "./auth.controller";
import authService from "./auth.service";
import authDirective from "./auth.directive";

export default angular.module("Shared.Auth", [login, signup, forgotpass])
    .directive("tpbAuth", authDirective)
    .controller("AuthController", authController)
    .service("AuthService", authService)
    .name;