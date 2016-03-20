routes.$inject = ["$stateProvider"];

export default function routes($stateProvider){
    $stateProvider
        .state("auth", {
            url: "/auth",
            views: {
                "authView": {
                    template: require("./auth.view.html")
                }
            }
        })
};