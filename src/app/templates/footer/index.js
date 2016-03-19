import angular from "angular";

import footerDirective from "./footer.directive";

export default angular.module("Templates.Footer", [])
  .directive("tpbFooter", footerDirective)
  .name;
