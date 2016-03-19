import angular from "angular";

import authorPostsNewController from "./author.posts.new.controller";

import authorPostsNewRoutes from "./author.posts.new.routes";


export default angular.module("Author.Posts.New", [])
    .config(authorPostsNewRoutes)
    .controller("AuthorPostsNewContoller", authorPostsNewController)
    .name;
