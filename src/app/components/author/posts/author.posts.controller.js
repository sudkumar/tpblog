export default class AuthorPostsController{
  constructor(authorPostsService, stateParams){
    // Dependencies
    this._service = authorPostsService;
    this._stateParams = stateParams;

    // the new post
    this.newPost = {}

    // the editable post
    this.post = {}

    // Controller variables
    // get all the post for the author
    this.posts = authorPostsService.posts;
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
