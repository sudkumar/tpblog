
export default class AuthorPostsService{
  constructor(){
    this.posts = [
      {title: "Blog 1 -- Title", info: "Some info about blog", authorId: "sudkumar"},
      {title: "Blog 2 -- Title", info: "Some info about blog", authorId: "sudkumar"}
    ];
  }

  // get the post with this id
  get(postId){
    return {title: "New blog-- Title", info: "Some info", author: "Some one", postId: postId};
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
