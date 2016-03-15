export default class SubscribeService{
    constructor(http){
        this._http = http;
    }

    // subscribe service
    subscribe(name, email){
        console.log("Subscribe with:", name, email);
    }
}

SubscribeService.$inject = ["$http"];