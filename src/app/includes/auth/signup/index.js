import angular from "angular";

import signupDirective from "./signup.directive";

export default angular.module("Auth.Signup", [])
    .directive("tpbSignup", signupDirective)
    .name;