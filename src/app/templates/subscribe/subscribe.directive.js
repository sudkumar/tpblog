
subscribeDirective.$inject = ["SubscribeService"];

export default function subscribeDirective(subscribeService){
    return {
        restrict: "E",
        scope: {},
        template: require("./subscribe.view.html"),
        link: function(scope, elem, attrs){
            scope.user = {name: "", email: ""};
            scope.subscribe = function subscribe(){
                // subscribe for blog
                subscribeService.subscribe(scope.user.name, scope.user.email);
            }
        }
    }
}