export default function authorinfoDirective(){
    return{
        restrict: "E",
        scope: {
            // get the author
            author: "@"
        },
        template: require("./authorinfo.view.html")
    };
}

