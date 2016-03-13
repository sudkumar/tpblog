export default class AuthorProfileService{

  constructor(){
    this.profile = {
      name: "Sudhir",
      bio : "Some bio for author",
      fb : "https://www.facebook.com/sdhmitharwal"
    };
  }

  // Update the profile
  update(profile){
    console.log("AuthorProfileService.update::", profile);
  }

}
