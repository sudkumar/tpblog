routes.$inject = ["$stateProvider"];

export default function routes($stateProvider){
    $stateProvider
        .state("author.posts.new", {
          url: "/new",
          views: {
            "authorPostsView@author": {
              template: require("./author.posts.new.view.html"),
              controller: "AuthorPostsNewContoller",
              controllerAs: "new"
            }
          }
        })
}