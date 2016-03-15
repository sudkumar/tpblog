import angular from "angular";

import authorinfoDirective from "./authorinfo.directive";

export default angular.module("Shared.Authorinfo", [])
    .directive("tpAuthorinfo", authorinfoDirective)
    .name;