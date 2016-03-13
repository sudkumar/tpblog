import angular from "angular";

import footerTemplate from "./footer";
import menuTemplate from "./menu";

export default angular.module("TourepediaBlog.Templates", 
    [footerTemplate, menuTemplate])
    .name;
