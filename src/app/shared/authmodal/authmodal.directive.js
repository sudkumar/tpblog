modalDirective.$inject = ["$rootScope", "ModalService"];

export default function modalDirective(rootScope, modalService){
    return{
        restrict: "E",
        template: require("./authmodal.view.html"),
        link: function(scope, elem, attrs){

            // listen the modal open/close event from rootScope
            rootScope.$on("modal.open", function(e, params){
                // make the modal active
                open();
            }) ;

            rootScope.$on("modal.close", function(e, params){
                // make the modal inactive
                close();
            })

            // add the click listener to modal__window to prevent further propogation.
            // this is required for auto close of modal
            var modal__window = elem[0].getElementsByClassName("modal__window")[0];
            angular.element(modal__window).on("click", function(e){
                e.stopPropagation();
            }); 

            // check for click outside the main view.
            // and ask for closing the view
            elem.on("click", function(e){
                // stop the propogation 
                e.stopPropagation();
                reject();
            });

            var open = function(){
                elem.children().addClass("active");
            };

            var close = function(){
                elem.children().removeClass("active");
            };

            var reject = function(){
                modalService.reject("User not interested");
            }
            scope.reject = reject;
        }
    }
}