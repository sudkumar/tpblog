import angular from "angular";

// import the  modules
import postcard from "./postcard";
import authorinfo from "./authorinfo";
import mdeditor from "./mdeditor";
import auth from "./auth";

// export the complete  module
export default angular.module("TourepediaBlog.Includes",
    [postcard, authorinfo, mdeditor, auth])
    .name;
