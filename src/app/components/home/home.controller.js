export default class HomeController{
  constructor(db){
    this._db = db;
    this.posts = db.posts;
  }
  

}



HomeController.$inject = ["DB"];
