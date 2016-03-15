import angular from "angular";

import footerTemplate from "./footer";
import menuTemplate from "./menu";
import subscribeTemplate from "./subscribe";

export default angular.module("TourepediaBlog.Templates", 
    [footerTemplate, menuTemplate, subscribeTemplate])
    .name;
