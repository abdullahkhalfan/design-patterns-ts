import Stream from "./Stream";

export default class EncryptedStream implements Stream {
    constructor(protected _stream: Stream) {
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