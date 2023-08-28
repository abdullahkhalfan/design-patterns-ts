import UIControl from "./UIControl";

export default class Selector extends UIControl {
    protected _selected: string | null = null;

    get selected(): string | null {
        return this._selected;
    }

    set selected(selected: string | null) {
        this._selected = selected;
        this._owner.handleChange(this);
    }
}