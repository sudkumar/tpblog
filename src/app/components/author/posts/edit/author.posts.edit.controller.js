export default class AuthorPostsEditController{
    constructor(authorPostsService){
        // get the current selected post if it exists 
        // else get it from the state params
        this.post = {}
    }

    // update the post
    update(){
        console.log("Update the post:", this.post);
    }


}