import Movie from "./Movie";
import PresentationBuilder from "./PresentationBuilder";
import Slide from "./Slide";

export default class MovieBuilder implements PresentationBuilder {
    /**
     * Representation
     */
    protected _movie: Movie;

    constructor() {
        this._movie = new Movie();
    }

    addSlide(slide: Slide): void {
        this._movie.addFrame(slide.text);
    }

    get movie(): Movie {
        return this._movie;
    }
}