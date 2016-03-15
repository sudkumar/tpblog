import angular from "angular";

import subscribeService from "./subscribe.service";
import subscribeDirective from "./subscribe.directive";

export default angular.module("Template.Subscribe", [])
    .directive("blog-subscribe", subscribeDirective)
    .service("SubscribeService", subscribeService)
    .name;