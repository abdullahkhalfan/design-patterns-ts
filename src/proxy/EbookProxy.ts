import Ebook from "./Ebook";
import RealEbook from "./RealEbook";

export default class EbookProxy extends Ebook {

    protected _realEbook: RealEbook | null = null;

    constructor(fileName: string) {
        super(fileName);
    }

    override show(): void {
        if (!this._realEbook) {

            // This is when the ebook actually gets loaded.
            this._realEbook = new RealEbook(this._fileName);
        }

        this._realEbook.show();
    }
}