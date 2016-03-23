import angular from "angular";

import authorPostsEditRoutes from "./author.posts.edit.routes";
import authorPostsEditController from "./author.posts.edit.controller";

export default angular.module("Author.Posts.Edit", [])
    .config(authorPostsEditRoutes)
    .controller("AuthorPostsEditContoller", authorPostsEditController)
    .name;
