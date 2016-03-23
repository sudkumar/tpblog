import angular from "angular";
import uirouter from "angular-ui-router";

import authorRoutes from "./author.routes";
import authorProfile from "./profile";
import authorPosts from "./posts";

import authorController from "./author.controller";

export default angular.module("States.Author",
  [uirouter, authorProfile, authorPosts])
  .config(authorRoutes)
  .controller("AuthorController", authorController)
  .name;
