import angular from "angular";

// import the components
import homeState from "./home";
import aboutState from "./about";
import authorState from "./author";
import postState from "./post";
import authState from "./auth";

export default angular.module("TourepediaBlog.States",
  [homeState, aboutState, authorState, postState, authState])
  .name;
