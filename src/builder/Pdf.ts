export default class Pdf {
    protected _pages: string[] = [];

    addPage(text: string) {
        this._pages.push(text);
    }
}