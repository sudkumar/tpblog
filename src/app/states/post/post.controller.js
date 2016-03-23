export default class PostController{
  constructor(postService, stateParams, mdService){
    this._postService = postService;
    this._stateParams = stateParams;
    this._mdService = mdService; 
    this.post = this._postService.get(this._stateParams.postId);
    this.post.html = this._mdService.toHTML(this.post.content);
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


PostController.$inject = ["PostService", "$stateParams", "MDEditorService"];
