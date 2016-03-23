
export default class AuthorPostsService{
  constructor(http, db){
    this._http = http;
    this._posts = db.posts;
  }

  all(authorId){
    var posts = [];
    for (var i = this._posts.length - 1; i >= 0; i--) {
      var post = this._posts[i];
      if (post.authorId == authorId){
        posts.push(post);
      }
    }
    return posts;
  }

  // get the post with this id
  get(authorId, postId){
    var post = {};
    for (var i = this._posts.length - 1; i >= 0; i--) {
      post = this._posts[i];
      if (post.id == postId && post.authroId == authorId){
        return post;
      }
    }
    return undefined;
  }

  // get post with token
  getWithToken(postToken){
    var post = {};
    for (var i = this._posts.length - 1; i >= 0; i--) {
      post = this._posts[i];
      if (post.token == postToken){
        return post;
      }
    }
    return undefined;
  }

  // Put a new post.
  put(post){
    console.log("AuthorPostsService.submit::", post);
    this.posts.append(post);
  }

  // Update the post
  update(post){
    console.log("AuthorPostsService.update::", post);
  }

  // Detete the post with postId
  delete(postId){
    console.log("AuthorPostsService.delete::", postId);
  }
}


AuthorPostsService.$inject = ["$http", "DB"];
