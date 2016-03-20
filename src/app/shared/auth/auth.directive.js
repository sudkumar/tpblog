export default function authDirective(){
    return {
        restrict: "E",
        scope: {},
        transclude: true,
        template: require("./auth.view.html"),
        controller: "AuthController",
        controllerAs: "auth"
    }
}

