export default class EditorState {

    constructor(protected _content: string) {
    }

    get content(): string {
        return this._content;
    }
}