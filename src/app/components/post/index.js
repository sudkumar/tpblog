import angular from "angular";
import uirouter from "angular-ui-router";

import postRoutes from "./post.routes";
import postController from "./post.controller";
import postService from "./post.service";

export default angular.module("Components.Post", [uirouter])
  .config(postRoutes)
  .controller("PostController", postController)
  .service("PostService", postService)
  .name;
