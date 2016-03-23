routes.$inject = ["$stateProvider"];

export default function routes($stateProvider){
  $stateProvider
    .state("author.posts", {
      url: "/posts",
      views: {
        "authorProfileView" : {},
        "authorPostsView": {
          template : require("./author.posts.view.html"),
          controller: "AuthorPostsController",
          controllerAs: "posts"
        }
      }
    })
}
