/**
 * Builder
 *
 * Seperate the construction of an object from its representation.
 */

import MovieBuilder from "./MovieBuilder";
import PdfBuilder from "./PdfBuilder";
import Presentation from "./Presentation";
import Slide from "./Slide";

const presentation = new Presentation();

presentation.addSlide(new Slide("Slide 1"));
presentation.addSlide(new Slide("Slide 2"));

const pdfBuilder = new PdfBuilder();

presentation.export(pdfBuilder); // Builder
console.log(pdfBuilder.pdf) // Representation

const movieBuilder = new MovieBuilder();

presentation.export(movieBuilder); // Builder
console.log(movieBuilder.movie); // Representation