import angular from "angular";

import postcardDirective from "./postcard.directive";

export default angular.module("Shared.Postcard", [])
    .directive("tpPostcard", postcardDirective)
    .name;