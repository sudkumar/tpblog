routes.$inject = ["$stateProvider"];

export default function routes($stateProvider){
  $stateProvider
    .state('home', {
      url: "/",
      views:{
        "homeView": {
          template: require("./home.view.html"),
          controller: "HomeController",
          controllerAs: "home"
        }
      }
    });
}
