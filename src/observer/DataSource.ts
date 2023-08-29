import Subject from "./Subject";

export default class DataSource extends Subject {
    constructor(protected _value: string) {
        super();
    }

    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
        this.notifyObservers();
    }
}
