import Command from "./Command";

export default class Button {
    constructor(protected _label: string, protected _command: Command) {
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