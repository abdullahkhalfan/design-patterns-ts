export default class Message {
    constructor(protected _content: string) {

    }

    getContent(): string {
        return this._content;
    }
}