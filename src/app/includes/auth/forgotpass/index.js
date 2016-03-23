import angular from "angular";

import forgotpassDirective from "./forgotpass.directive";

export default angular.module("Auth.Forgotpass", [])
    .directive("tpbForgotpass", forgotpassDirective)
    .name;