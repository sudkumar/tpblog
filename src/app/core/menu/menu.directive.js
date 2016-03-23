menuDirective.$inject = ["ModalService"];

export default function menuDirective(modal){
    return{
        restrict: "E",
        scope : {},
        template: require("./menu.view.html"),
        link: function(scope, elem, attrs){

            // open the auth modal
            scope.login = function(){
                modal.open({id: "auth"}).then(function(response){
                    console.log("Success: ", response);
                }, function(reason){
                    console.error("Failure: ",reason);
                });
            }
        }
    };
}