import HttpRequest from "./HttpRequest";

export default abstract class Handler {
    constructor(protected _nextHandler: Handler | null = null) {}

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
