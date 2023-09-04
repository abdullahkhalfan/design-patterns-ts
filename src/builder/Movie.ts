export default class Movie {
    protected _frames: string[] = [];

    addFrame(text: string) {
        this._frames.push(text);
    }
}