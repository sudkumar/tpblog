import angular from "angular";

import subscribeDirective from "./subscribe.directive";

export default angular.module("Template.Subscribe", [])
    .directive("tpbSubscribe", subscribeDirective)
    .name;
