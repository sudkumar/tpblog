export default class AuthorProfileService{

  constructor(http, db){
    this._http = http;
    this._authors = db.authors;
  }

  // get the profile
  get(authorId){
    var author;
    for (var i = this._authors.length - 1; i >= 0; i--) {
        author = this._authors[i];
        if (author.username == authorId){
            return author;
        }
    }
  }

  // Update the profile
  update(profile){
    console.log("AuthorProfileService.update::", profile);
  }

}

AuthorProfileService.$inject = ["$http", "DB"];
