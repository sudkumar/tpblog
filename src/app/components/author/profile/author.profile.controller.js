export default class AuthorProfileController{
  constructor(authorProfileService, stateParams){
    this._profileService = authorProfileService;
    this._stateParams = stateParams;
    this.get();
  }

  // get the author profile
  get(){
    this.author = this._profileService.get(this._stateParams.authorId);
  }

  // Update the profile
  update(){
    console.log(this.author);
  }
}

// inject the dependencies
AuthorProfileController.$inject = ["AuthorProfileService", "$stateParams"];
