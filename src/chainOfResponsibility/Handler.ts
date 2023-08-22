import HttpRequest from "./HttpRequest";

export default abstract class Handler {

    protected _nextHandler: Handler | null;

    constructor(nextHandler: Handler | null = null) {
        this._nextHandler = nextHandler;
    }

    handle(request: HttpRequest) {
        // So long as the internal handler keeps returning true
        // we want to continue the chain.
        if (!this.doHandle(request)) {
            return;
        }

        if (this._nextHandler) {
            this._nextHandler.handle(request);
        }
    }

    protected abstract doHandle(request: HttpRequest): boolean;
}