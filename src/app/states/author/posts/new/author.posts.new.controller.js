export default class AuthorPostsNewController{
    constructor(postsService){
        this._postsService = postsService;
        this.post = {};
    }

    new(){
        console.log("something");
    }
};

AuthorPostsNewController.$inject = ["AuthorPostsService"];