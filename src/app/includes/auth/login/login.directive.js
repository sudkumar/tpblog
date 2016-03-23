export default function loginDirective(){
    return{
        require: "^^tpbAuth",
        restrict: "E",
        template: require("./login.view.html"),
        link: function(scope, elems, attrs, authCtrl){

            scope.user = {email: "luckysud4@gmail.com", password: "name", keepLoggedIn: true};

            scope.login = function(){
                authCtrl.login(scope.user);
            }
        }
    }
}