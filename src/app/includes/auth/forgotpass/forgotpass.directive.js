export default function forgotpassDirective(){
    return{
        require: "^^tpbAuth",
        restrict: "E",
        template: require("./forgotpass.view.html"),
        link: function(scope, elems, attrs, authCtrl){
            scope.forgotpass = authCtrl.forgotpass;
        }
    }
}