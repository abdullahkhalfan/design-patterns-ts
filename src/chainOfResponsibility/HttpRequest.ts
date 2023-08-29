export default class HttpRequest {
    constructor(protected _user: string, protected _password: string) {}

    get user(): string {
        return this._user;
    }

    get password(): string {
        return this._password;
    }
}
