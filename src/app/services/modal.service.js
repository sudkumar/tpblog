/**
 * Modal Service
 * This service exhibits a functionality for opening or 
 * closing modal from anywhere in the app. Opening a new modal 
 * return a promise for which caller can wait for resolve or rejection
 * and caller can also do chaining of modals if required.
 */
export default class ModalService{
    constructor(rootScope, q){

        // attach the dependencies
        this._rootScope = rootScope;
        this._q = q;
            

        // attach the new modal instance
        this.modal = {
            deferred: null,
            params: null
        };
    }

    /**
     * Open a new modal
     * @param  {object} params any parameters that we want to associate with the modal
     * @param  {boolean} doPipe a boolean value indicating whether to do pipe the new modal to previous or not
     * @return {promise}        a promise to resolve and reject later
     */
    open(params, doPipe){
        // get the previous promise, if there is any
        var previousDeferred = this.modal.deferred;

        // create the new modal instance 
        this.modal.deferred = this._q.defer();
        this.modal.params = params;

        // if there was a modal already opened
        if(previousDeferred){

            // and if user wants to pipe the new modal to previous opened modal
            if(doPipe){
                // pipe the previous defer's callback to resolution or rejection of the newly created modal
                this.modal.promise.then(previousDeferred.resolve, previousDeferred.reject);
            }else{
                // don't pipe. reject the previous modal
                previousDeferred.reject();
            }
        }

        // previous deferred has been taken care from above
        // now emit a modal open event (modal directive to open a modal)
        this._rootScope.$emit('modal.open', this.modal.params);

        // now return the new promise to the caller
        return this.modal.deferred.promise
    }

    /**
     * Resolve the associated modal
     * @param  {object} response a reponse that we want to give when resolving the modal
     * @return {null}          
     */
    resolve(response){
        // check if there is a promise to resolve
        if(! this.modal.deferred){
            return;
        }

        // resolve the promise
        this.modal.deferred.resolve(response);

        // emit a modal close event
        this._rootScope.$emit("modal.close", this.modal.params);

        // remove the current modal
        this.modal.deferred = this.modal.params = null;
    }

    /**
     * Reject the associated modal
     * @param  {object} reason a reason that we want to give when rejecting the modal
     * @return {null}
     */
    reject(reason){
        // check if there is a promise to resolve
        if(! this.modal.deferred){
            return;
        }

        // reject the promise
        this.modal.deferred.reject(reason);

        // emit a modal close event
        this._rootScope.$emit("modal.close", this.modal.params);

        // remove the current modal
        this.modal.deferred = this.modal.params = null;
    }

    /**
     * Proceed to a new modal (a convenient value for chaining of modals)
     * @param  {object} params params to the new modal that we want to proceed
     * @return {promise}       a promise (return value of this.open) to be resolved later
     */
    proceedTo(params){
        return this.open(params, true);
    }

    /**
     * Get the parameters with the associated modal
     * @return {object} parameters associated with modal
     */
    params(){
        return (this.modal.params || {})
    }

}

// inject the dependencies
ModalService.$inject = ["$rootScope", "$q"];