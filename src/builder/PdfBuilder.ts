import Pdf from "./Pdf";
import PresentationBuilder from "./PresentationBuilder";
import Slide from "./Slide";

export default class PdfBuilder implements PresentationBuilder {
    /**
     * Representation
     */
    protected _pdf: Pdf;

    constructor() {
        this._pdf = new Pdf();
    }

    addSlide(slide: Slide): void {
        this._pdf.addPage(slide.text);
    }

    get pdf(): Pdf {
        return this._pdf;
    }
}