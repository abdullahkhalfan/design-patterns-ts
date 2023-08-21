import Compressor from "./Compressor";
import Filter from "./Filter";

export default class ImageStorage {
    store(fileName: string, filter: Filter, compressor: Compressor): void {
        filter.filter(fileName);
        compressor.compress(fileName);
    }
}