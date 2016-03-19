import angular from "angular";

import menuDirective from "./menu.directive";

export default angular.module("Templates.Menu", [])
    .directive("tpbMenu", menuDirective)
    .name;
 