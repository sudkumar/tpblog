export default class PostService{
    constructor(http, db){
        this._http = http;
        this._posts = db.posts;
    }

    // get a blog
    get(postHandle){
        console.log("Get post with handle:", postHandle);
        var post;
        for (var i = this._posts.length - 1; i >= 0; i--) {
            post = this._posts[i];
            if (post.handle == postHandle){
                return post;
            }
        }
    }

    // like
    like(post){
        console.log("Like this post:", post);
    }

    // share 
    share(post){
        console.log("Share this post:", post);
    }
}

PostService.$inject = ["$http", "DB"];