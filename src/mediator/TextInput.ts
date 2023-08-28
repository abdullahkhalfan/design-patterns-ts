import UIControl from "./UIControl";

export default class TextInput extends UIControl {
    protected _val: string | null = null;

    get val(): string | null {
        return this._val;
    }

    set val(val: string | null) {
        this._val = val;
        this._owner.handleChange(this);
    }
}