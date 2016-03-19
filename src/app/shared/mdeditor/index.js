import angular from "angular";
import angularSanitize from "angular-sanitize";

import mdeditorDirective from "./mdeditor.directive";
import mdeditorService from "./mdeditor.service";

export default angular.module("Shared.Mdeditor", [angularSanitize])
    .directive("tpbMdeditor", mdeditorDirective)
    .service("MDEditorService", mdeditorService)
    .name;