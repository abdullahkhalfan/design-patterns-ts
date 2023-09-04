import PresentationBuilder from "./PresentationBuilder";
import Slide from "./Slide";

export default class Presentation {
    protected _slides: Slide[] = [];

    addSlide(slide: Slide): void {
        this._slides.push(slide);
    }

    export(presentationBuilder: PresentationBuilder): void {
        for (const slide of this._slides) {
            presentationBuilder.addSlide(slide);
        }

        presentationBuilder.addSlide(new Slide("Copyright"));
    }
}