routes.$inject = ["$stateProvider"];

export default function routes($stateProvider){
  $stateProvider
    .state("author", {
      url: "/author/{authorId}",
      views: {
        "authorView": {
          template: require("./author.view.html"),
          controller: "AuthorController",
          controllerAs: "author"
        },
        "authorProfileView@author": {
          template: require("./profile/author.profile.view.html"),
          controller: "AuthorProfileController",
          controllerAs: "profile"
        },
        "authorPostsView@author" : {
          template : require("./posts/author.posts.view.html"),
          controller: "AuthorPostsController",
          controllerAs: "posts"
        }
      }
    })
}
