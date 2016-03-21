export default function authDirective(){
    return {
        restrict: "E",
        transclude: true,
        template: require("./auth.view.html"),
        controller: "AuthController",
        controllerAs: "auth"
    }
}

