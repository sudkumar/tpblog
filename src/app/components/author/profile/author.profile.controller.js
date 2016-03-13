export default class AuthorProfileController{
  constructor(authorProfileService){
    this.service = authorProfileService;
    this.author = authorProfileService.profile;
  }

  // Update the profile
  update(){
    console.log(this.author);
  }
}

// inject the dependencies
AuthorProfileController.$inject = ["AuthorProfileService"];
