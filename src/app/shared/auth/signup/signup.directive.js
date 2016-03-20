export default function signupDirective(){
    return {
        // require the auth controller 
        require: "^^tpbAuth",
        restrict: "E",
        template: require("./signup.view.html"),
        link: function(scope, elem, attrs, authCtrl){
            scope.newuser= {
                name: "Sudhir Mitharwal",
                email: "luckysud4@gmail.com",
                password: "name",
                repassword: "name"
            };

            scope.signup = function(){
                authCtrl.signup(scope.newuser);
            }
        }
    }
}