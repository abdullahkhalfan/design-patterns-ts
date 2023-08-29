export default abstract class Ebook {
    constructor(protected _fileName: string) {
    }

    get fileName(): string {
        return this._fileName;
    }

    abstract show(): void;
}