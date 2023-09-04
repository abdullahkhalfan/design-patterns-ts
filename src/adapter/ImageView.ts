import Filter from "./Filter";
import Image from "./Image";

export default class ImageView {
    constructor(protected _image: Image) {
    }

    apply(filter: Filter): void {
        filter.apply(this._image);
    }
}