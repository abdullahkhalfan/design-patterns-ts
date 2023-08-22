import Command from "./Command";

export default class Button {
    protected _label: string;
    protected _command: Command;

    constructor(label: string, command: Command) {
        this._label = label;
        this._command = command;
    }

    get label(): string {
        return this._label;
    }

    set label(val: string) {
        this._label = val;
    }

    click(): void {
        this._command.execute();
    }
}