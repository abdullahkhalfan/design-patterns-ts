import Slide from "./Slide";

export default interface PresentationBuilder {
    addSlide(slide: Slide): void;
}