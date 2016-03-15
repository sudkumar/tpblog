export default function postcardDirective(){
    return{
        restrict: "E",
        scope:{
            // get the post from the parent
            post: "="
        },
        template: require("./postcard.view.html"),
        link: function(scope, elem, attrs){

        }
    };
}