export default class PostController{
  constructor(postService, stateParams){
    this._postService = postService;
    this._stateParams = stateParams;
    this.post = this._postService.get(this._stateParams.postId);
  }

  // like the post
  like(){
    this._postService.like(this.post);
  }

  // share the post
  share(){
    this._postService.share(this.post);
  }
};


PostController.$inject = ["PostService", "$stateParams"]
