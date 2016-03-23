export default class AuthService{
    constructor(http){
        this._http = http;
    }

    isLoggedIn(credentials){
        console.log("Is logged in: ", credentials);
    }

    login(credentials){
        console.log("Login with: ", credentials);
    }

    logout(){
        console.log("Logout");
    }

    signup(credentials){
        console.log("Signup with: ", credentials);
    }

    forgotpass(email){
        console.log("Forgot password for: ", email);
    }
}

AuthService.$inject = ["$http"];