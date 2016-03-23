import angular from "angular";

import menuDirective from "./menu.directive";

export default angular.module("Core.Menu", [])
    .directive("tpbMenu", menuDirective)
    .name;
