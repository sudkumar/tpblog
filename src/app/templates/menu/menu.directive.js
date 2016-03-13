export default function menuDirective(){
    return{
        restrict: "E",
        scope : {},
        template: require("./menu.view.html")
    };
}