export default class AuthController{

    constructor(authService){
        this._service = authService;
    }

    login(credentials){
        this._service.login(credentials);
    }

    logout(){
        this._service.logout(this.user);
    }

    signup(credentials){
        this._service.signup(credentials);
    }

    forgotpass(email){
        this._service.forgotpass(email);
    }
}

AuthController.$inject = ["AuthService"];