import Iterable from "./Iterable";

export default class History implements Iterable<string> {

    protected _index: number = 0;

    /**
     * We can choose to store the data in any structure we want.
     * Any logic outside of this class iterating through this
     * object will not need to know.
     */
    protected _urls: string[] = [];

    add(url: string): void {
        this._urls.push(url);
    }

    hasNext(): boolean {
        return this._urls.length > this._index;
    }

    next(): string {
        if (!this.hasNext()) {
            throw new Error("No more URLs");
        }

        const url = this._urls[this._index];

        this._index++;

        return url;
    }
}