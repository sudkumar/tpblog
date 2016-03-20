import angular from "angular";

// import the shared modules
import postcardShared from "./postcard";
import authorinfoShared from "./authorinfo";
import mdeditorShared from "./mdeditor";
import authShared from "./auth";


// export the complete shared module
export default angular.module("TourepediaBlog.Shared", 
    [postcardShared, authorinfoShared, mdeditorShared, authShared])
    .name;