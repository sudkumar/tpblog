import angular from "angular";
import uirouter from "angular-ui-router";

import postRoutes from "./post.routes";
import postController from "./post.controller";

export default angular.module("States.Post", [uirouter])
  .config(postRoutes)
  .controller("PostController", postController)
  .name;
