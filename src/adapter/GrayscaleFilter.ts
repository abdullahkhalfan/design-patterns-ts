import Filter from "./Filter";
import Image from "./Image";

export default class GrayscaleFilter implements Filter {
    apply(image: Image): void {
        console.log("Applying grayscale filter...");
    }
}