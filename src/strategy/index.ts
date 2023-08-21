import BlackWhiteFilter from "./BlackWhiteFilter";
import ImageStorage from "./ImageStorage";
import JpgCompressor from "./JpgCompressor";
import PngCompressor from "./PngCompressor";


const imageStorage = new ImageStorage();

imageStorage.store(
    'abc.png',
    new BlackWhiteFilter(),
    new PngCompressor()
);

imageStorage.store(
    'def.jpg',
    new BlackWhiteFilter(),
    new JpgCompressor()
);