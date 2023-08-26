import Ebook from "./Ebook";

export default class Library {
    protected _ebooks: { [name: string]: Ebook; } = {};

    add(ebook: Ebook): void {
        if (!this._ebooks[ebook.fileName]) {
            this._ebooks[ebook.fileName] = ebook;
        }
    }

    open(fileName: string): void {
        if (this._ebooks[fileName]) {
            this._ebooks[fileName].show();
        }
    }
}