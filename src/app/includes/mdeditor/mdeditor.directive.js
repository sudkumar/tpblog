mdeditorDirective.$inject = ["MDEditorService"];

export default function mdeditorDirective(mdService){
    return{
        restrict: "AE",
        scope:{
            md: "="  
        },
        template: require("./mdeditor.view.html"),
        link: function(scope, elems, attrs) {
            // get the markdown instance
            
            scope.md = scope.md || "";
            scope.html = "";    
            
            scope.preview =  function(){
                scope.html = mdService.toHTML(scope.md);
            }
            if(scope.md){
                scope.preview();
            }
        }
    }
}