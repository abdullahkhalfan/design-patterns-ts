import Ebook from "./Ebook";

export default class RealEbook extends Ebook {
    constructor(fileName: string) {
        super(fileName);

        this.load();
    }

    protected load(): void {
        console.log(`Loading the ebook "${this._fileName}"`);
    }

    override show(): void {
        console.log(`Showing the ebook "${this._fileName}"`);
    }
}