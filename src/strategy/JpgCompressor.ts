import Compressor from "./Compressor";

export default class JpgCompressor implements Compressor {
    compress(fileName: string): void {
        console.log("Compressing using JPG compressor");
    }
}