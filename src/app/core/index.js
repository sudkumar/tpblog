/**
 *  Module of our application
 * This module consits of modules that stays on every page of our app.
 * This consists of modul such as menu bar, footer, subscribe etc.
 */
import angular from "angular";


// import the  modules
import footer from "./footer";
import menu from "./menu";
import subscribe from "./subscribe";
import modals from "./modals";

// export the  module of application
export default angular.module("TourepediaBlog.Core",
    [footer, menu, subscribe, modals])
    .name;
