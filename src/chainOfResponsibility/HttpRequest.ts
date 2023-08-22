export default class HttpRequest {
    protected _user: string;
    protected _password: string;

    constructor(user: string, password: string) {
        this._user = user;
        this._password = password;
    }

    get user(): string {
        return this._user;
    }

    get password(): string {
        return this._password;
    }
}