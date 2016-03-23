export default function postcardDirective(){
    return{
        restrict: "E",
        scope:{
            // get the post from the parent
            post: "=",
            canEdit: "@"
        },
        template: require("./postcard.view.html"),
        link: function(scope, elem, attrs){
            // console.log(scope.canEdit);
        }
    };
}