export default class AuthController{

    constructor(authService, modalService){
        this._service = authService;
        this._modal = modalService;
    }

    login(credentials){
        this._service.login(credentials);
        this._modal.resolve("Login Success");
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

AuthController.$inject = ["AuthService", "ModalService"];