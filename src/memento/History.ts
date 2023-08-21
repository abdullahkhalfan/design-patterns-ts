import EditorState from "./EditorState";

/**
 * The Caretaker
 */
export default class History {

    protected _states: EditorState[]  = [];

    push(state: EditorState) {
        this._states.push(state);
    }

    pop(): EditorState | undefined {
        return this._states.pop();
    }
}