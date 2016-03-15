import angular from "angular";

import posts from "./posts";
import authors from "./authors";

export default angular.module("Tourepedia.DB", [])
    .constant("DB", {posts: posts, authors: authors})
    .name;
