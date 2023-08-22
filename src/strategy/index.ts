/**
 * Strategy
 *
 * This pattern is very much like the State pattern, except with this one there
 * isn't a single state, rather different behaviours are represented using
 * different strategy objects. Kind of like multiple state objects being used in
 * one class. We delegate/forward the execution of a task to an object.
 */

import BlackWhiteFilter from "./BlackWhiteFilter";
import ImageStorage from "./ImageStorage";
import JpgCompressor from "./JpgCompressor";
import PngCompressor from "./PngCompressor";

const imageStorage = new ImageStorage();

imageStorage.store("abc.png", new BlackWhiteFilter(), new PngCompressor());

imageStorage.store("def.jpg", new BlackWhiteFilter(), new JpgCompressor());
