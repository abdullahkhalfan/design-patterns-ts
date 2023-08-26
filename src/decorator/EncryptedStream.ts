import Stream from "./Stream";

export default class EncryptedStream implements Stream {

    protected _stream: Stream;

    constructor(stream: Stream) {
        this._stream = stream;
    }

    write(data: string): void {
        const encrypted = this.encrypt(data);
        this._stream.write(encrypted);
    }

    /**
     * A fake encryptor.
     */
    protected encrypt(data: string) {
        return ("*").repeat(data.length);
    }
}