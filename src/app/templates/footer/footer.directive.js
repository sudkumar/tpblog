import angular from "angular";

export default function footerDirective(){
  return{
    restrict: "E",
    scopr: {},
    template: require("./footer.view.html")
  };
}
