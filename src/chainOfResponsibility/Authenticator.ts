import Handler from "./Handler";
import HttpRequest from "./HttpRequest";

export default class Authenticator extends Handler {
    protected override doHandle(request: HttpRequest): boolean {
        console.log("Authenticating request");

        const isUserValid = request.user === "admin" && request.password === "12345678";

        return isUserValid;
    }
}