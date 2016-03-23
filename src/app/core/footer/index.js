import angular from "angular";

import footerDirective from "./footer.directive";

export default angular.module("Core.Footer", [])
  .directive("tpbFooter", footerDirective)
  .name;
