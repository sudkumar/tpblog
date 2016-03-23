import angular from "angular";
import uirouter from "angular-ui-router";

import authorPostsRoutes from "./author.posts.routes";
import authorPostsController from "./author.posts.controller";

// import the components of author posts
import postsEdit from "./edit";
import postsNew from "./new";


export default angular.module("Author.Posts", [uirouter, postsNew, postsEdit])
  .config(authorPostsRoutes)
  .controller("AuthorPostsController", authorPostsController)
  .name;
