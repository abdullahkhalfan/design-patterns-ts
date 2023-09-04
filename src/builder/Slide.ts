export default class Slide {
    constructor(protected _text: string) {
    }

    get text(): string {
        return this._text;
    }
}