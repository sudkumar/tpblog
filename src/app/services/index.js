import angular from "angular";

import postService from "./post.service";
import authorProfileService from "./author.profile.service";
import authorPostsService from "./author.posts.service";
import subscribeService from "./subscribe.service";
import modalService from "./modal.service";


export default angular.module("TourepediaBlog.Services", [])
    .service("PostService", postService)
    .service("AuthorProfileService", authorProfileService)
    .service("AuthorPostsService", authorPostsService)
    .service("SubscribeService", subscribeService)
    .service("ModalService", modalService)
    .name
