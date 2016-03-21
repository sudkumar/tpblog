import angular from "angular";

import postService from "./post.service";
import modalService from "./modal.service";

export default angular.module("TourepediaBlog.Services", [])
    .service("PostService", postService)
    .service("ModalService", modalService)
    .name