routes.$inject = ["$stateProvider"]

export default function routes($stateProvider){
  $stateProvider
    .state("about",{
      url: "/about",
      views:{
        "aboutView":{
          template: require("./about.view.html")
        }
      }
    })
};
