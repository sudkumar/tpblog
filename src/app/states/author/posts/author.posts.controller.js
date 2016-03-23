export default class AuthorPostsController{
  constructor(authorPostsService, stateParams){
    // Dependencies
    this._postService = authorPostsService;
    this._stateParams = stateParams;

    // all the post of the author
    this.posts = [];
    // Controller variables
    this.all();

  }


  // get all the post for the author
  all(){
    this.posts = this._postService.all(this._stateParams.authorId);
  }

  // update the post
  update(){
      console.log("Update the post:", this.post);
  }

  // submit the post
  submit(post){
    this._service.put(post);
  }

  // delete a post
  delete(postId){
    this._service.delete(postId);
  }

}
// inject the dependencies
AuthorPostsController.$inject = ["AuthorPostsService", "$stateParams"];
