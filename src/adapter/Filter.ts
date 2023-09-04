import Image from "./Image";

export default interface Filter {
    apply(image: Image): void;
}