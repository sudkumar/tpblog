import angular from "angular";

import postcardDirective from "./postcard.directive";

export default angular.module("Shared.Postcard", [])
    .directive("blogPostcard", postcardDirective)
    .name;