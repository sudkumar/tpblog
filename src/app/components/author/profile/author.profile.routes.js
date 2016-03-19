routes.$inject = ["$stateProvider"];

export default function routes($stateProvider){
  $stateProvider
    .state("author.editProfile", {
      url: "/editProfile",
      views:{
        "authorProfileView":{
          template: require("./edit/author.profile.edit.view.html"),
          controller: "AuthorProfileController",
          controllerAs: "profile"
        }
      }
    })
}
