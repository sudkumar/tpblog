routes.$inject = ["$stateProvider"];

export default function routes($stateProvider){
  $stateProvider
    .state("author.posts", {
      url: "/posts",
      abstract: true,
      views: {
        "authorProfileView@author" : {}
      }
    })
    .state("author.posts.new", {
      url: "/new",
      views: {
        "authorPostsNewView@author": {
          template: require("./new/author.posts.new.view.html")
        }
      }
    })
    .state("author.posts.edit", {
      url: "/edit/{postId}",
      views: {
        "authorPostsEditView":{
          template: require("./edit/author.posts.edit.view.html")
        }
      }
    })
}
