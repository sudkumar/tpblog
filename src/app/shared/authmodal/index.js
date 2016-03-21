import angular from "angular";

import authmodalDirective from "./authmodal.directive";

export default angular.module("Shared.Authmodal", [])
    .directive("tpbAuthmodal", authmodalDirective)
    .name;