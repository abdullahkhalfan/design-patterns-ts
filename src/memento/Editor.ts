import EditorState from "./EditorState";

/**
 * The Originator
 */
export default class Editor {

    protected _content: string = "";

    get content(): string {
        return this._content;
    }

    set content(content: string) {
        this._content = content;
    }

    createState(): EditorState {
        return new EditorState(this._content);
    }

    restoreState(state: EditorState): void {
        this._content = state.content;
    }
}