import Handler from "./Handler";
import HttpRequest from "./HttpRequest";

export default class Logger extends Handler {
    protected override doHandle(request: HttpRequest): boolean {
        console.log("Logging request");

        return true;
    }
}