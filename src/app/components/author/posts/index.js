import angular from "angular";
import uirouter from "angular-ui-router";

import authorPostsRoutes from "./author.posts.routes";
import authorPostsController from "./author.posts.controller";
import authorPostsService from "./author.posts.service";

export default angular.module("Author.Posts", [uirouter])
  .config(authorPostsRoutes)
  .controller("AuthorPostsController", authorPostsController)
  .service("AuthorPostsService", authorPostsService)
  .name;
