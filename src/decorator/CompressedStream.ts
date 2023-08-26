import Stream from "./Stream";

export default class CompressedStream implements Stream {

    protected _stream: Stream;

    constructor(stream: Stream) {
        this._stream = stream;
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