export default abstract class Ebook {
    protected _fileName: string;

    constructor(fileName: string) {
        this._fileName = fileName;
    }

    get fileName(): string {
        return this._fileName;
    }

    abstract show(): void;
}