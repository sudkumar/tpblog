routing.$inject = ['$urlRouterProvider'];

export default function routing($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
}
