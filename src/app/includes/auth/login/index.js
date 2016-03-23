import angular from "angular";

import loginDirective from "./login.directive";

export default angular.module("Auth.Login", [])
    .directive("tpbLogin", loginDirective)
    .name;