routes.$inject = ["$stateProvider"];

export default function routes($stateProvider){
  $stateProvider
    .state("post", {
      url: "/{postId}",
      views:{
        "postView": {
          template: require("./post.view.html"),
          controller: "PostController",
          controllerAs: "post"
        }
      }
    })
}
