import Dialog from "./Dialog";

export default abstract class UIControl {
    protected _owner: Dialog;

    constructor(owner: Dialog) {
        this._owner = owner;
    }
}