import angular from "angular";

// import the components
import homeComponent from "./home";
import aboutComponent from "./about";
import authorComponent from "./author";
import postComponent from "./post";

export default angular.module("TourepediaBlog.Components",
  [homeComponent, aboutComponent, authorComponent, postComponent])
  .name;
