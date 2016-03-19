export default class AuthorPostsEditController{
    constructor(authorPostsService, stateParams){
        this._postsService = authorPostsService;
        this._stateParams = stateParams;

        // get the current selected post if it exists 
        // else get it from the state params
        var token = this._stateParams.postToken;
        this.post = this._postsService.getWithToken(token);

    }


    // update the post
    update(){
        console.log("Update the post:", this.post);
    }
}

AuthorPostsEditController.$inject = ["AuthorPostsService", "$stateParams"];