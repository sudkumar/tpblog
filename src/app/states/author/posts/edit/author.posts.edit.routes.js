routes.$inject = ["$stateProvider"];

export default function routes($stateProvider){
  $stateProvider
    .state("author.posts.edit", {
      url: "/edit/{postToken}",
      views: {
        "authorPostsView@author":{
          template: require("./author.posts.edit.view.html"),
          controller: "AuthorPostsEditContoller",
          controllerAs: "edit"
        }
      }
    })
}