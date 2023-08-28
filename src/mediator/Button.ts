import UIControl from "./UIControl";

export default class Button extends UIControl {
    protected _isEnabled: boolean = false;

    get isEnabled(): boolean {
        return this._isEnabled;
    }

    set isEnabled(isEnabled: boolean) {
        this._isEnabled = isEnabled;
        this._owner.handleChange(this);
    }
}