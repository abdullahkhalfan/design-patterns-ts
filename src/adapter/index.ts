/**
 * Adapter
 *
 * Useful in situations where you have an existing class and you want to
 * use it somewhere, but the interface of this class does not match the form
 * expected. Use the pattern to convert the interface of this class to a
 * different form. E.g. a third party library, we then create an adapter
 * class that implements the interface that we expect and has composition
 * to the library class.
 */

import CartoonFilter from "./CartoonFilter";
import GrayscaleFilter from "./GrayscaleFilter";
import Image from "./Image";
import ImageView from "./ImageView";

const image = new Image();

const imageView = new ImageView(image);

imageView.apply(new GrayscaleFilter());
imageView.apply(new CartoonFilter()); // An adapter