import Stream from "./Stream";

export default class CompressedStream implements Stream {
    constructor(protected _stream: Stream) {
    }

    write(data: string): void {
        const compressed = this.compress(data);
        this._stream.write(compressed);
    }

    /**
     * A fake compressor.
     */
    protected compress(data: string) {
        return data.substring(0, 4);
    }
}